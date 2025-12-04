import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeorm from './config/typeorm';
import { UsersModule } from './modules/account/users/users.module';
import { AuthModule } from './modules/account/auth/auth.module';
import { SystemsModule } from './modules/gameSystem/systems/systems.module';
import { StatsModule } from './modules/gameSystem/stats/stats.module';
import { SkillsModule } from './modules/gameSystem/skills/skills.module';
import { SpellsModule } from './modules/gameSystem/spells/spells.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return configService.get('typeorm');
      },
    }),
    UsersModule,
    AuthModule,
    SystemsModule,
    StatsModule,
    SkillsModule,
    SpellsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
