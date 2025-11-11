import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string): Promise<User | null> {
    return this.usersService.findByEmail(email);
  }

  async findOrCreateUser(profile: any): Promise<User> {
    // Try find by googleId first if present, then by email
    let user: User | null = null;
    if (profile.googleId) {
      user = await this.usersService.findByGoogleId(profile.googleId);
    }
    if (!user) {
      user = await this.usersService.findByEmail(profile.email);
    }

    const now = new Date();

    if (!user) {
      // Create a new user if one doesn't exist
      user = await this.usersService.create({
        email: profile.email,
        firstName: profile.firstName || profile.given_name || null,
        lastName: profile.lastName || profile.family_name || null,
        password: null, // No password for OAuth users
        provider: 'google',
        googleId: profile.googleId || profile.sub || null,
        pictureUrl: profile.picture || null,
        lastLoginAt: now,
        isActive: true,
        role: 'user',
      });
    } else {
      // Update existing user with latest profile info
      user = await this.usersService.update(user.id, {
        firstName: user.firstName || profile.firstName || profile.given_name || null,
        lastName: user.lastName || profile.lastName || profile.family_name || null,
        provider: 'google',
        googleId: user.googleId || profile.googleId || profile.sub || null,
        pictureUrl: profile.picture || user.pictureUrl || null,
        lastLoginAt: now,
      });
    }

    return user;
  }

  generateToken(user: User): { access_token: string } {
    const payload = { email: user.email, sub: user.id, provider: user.provider };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateGoogleToken(token: string): Promise<any> {
    try {
      const client = new OAuth2Client(
        this.configService.get<string>('AUTH_GOOGLE_CLIENT_ID'),
      );
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: this.configService.get<string>('AUTH_GOOGLE_CLIENT_ID'),
      });

      const payload = ticket.getPayload();

      if (!payload) {
        return null;
      }

      return {
        email: payload.email,
        firstName: payload.given_name,
        lastName: payload.family_name,
        picture: payload.picture,
        googleId: payload.sub,
        sub: payload.sub,
      };
    } catch (error) {
      console.error('Error validating Google token:', error);
      return null;
    }
  }
}
