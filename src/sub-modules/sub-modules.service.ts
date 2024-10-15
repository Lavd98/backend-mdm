import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubModule } from './entities/sub-module.entity';

@Injectable()
export class SubModulesService {
  constructor(
    @InjectRepository(SubModule)
    private subModulesRepository: Repository<SubModule>,
  ) {}

  async findAll(): Promise<SubModule[]> {
    return this.subModulesRepository.find({ 
      where: { isActive: true },
      relations: ['module']
    });
  }

  async findOne(id: number): Promise<SubModule> {
    const subModule = await this.subModulesRepository.findOne({ 
      where: { id, isActive: true },
      relations: ['module']
    });
    if (!subModule) {
      throw new NotFoundException(`SubModule with ID "${id}" not found`);
    }
    return subModule;
  }

  async findByModuleId(moduleId: number): Promise<SubModule[]> {
    return this.subModulesRepository.find({ 
      where: { moduleId, isActive: true },
      relations: ['module']
    });
  }
}