import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { SystemsRepository } from '../../infrastracture/system.repository';

@Injectable()
export class SystemOwnerGuard implements CanActivate {
  constructor(private systemsRepository: SystemsRepository) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const systemId = request.params.systemId;
    const system = await this.systemsRepository.findOneById(systemId);
    return system.userId === user.id;
  }
}
