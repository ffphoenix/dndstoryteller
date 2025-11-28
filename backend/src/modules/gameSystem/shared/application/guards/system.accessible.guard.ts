import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { SystemsRepository } from '../../../systems/infrastracture/system.repository';

@Injectable()
export class SystemAccessibleGuard implements CanActivate {
  constructor(private systemsRepository: SystemsRepository) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const systemId = request.params.systemId;
    const system = await this.systemsRepository.findOneById(systemId);
    return system.isPublic || system.userId === user.id;
  }
}
