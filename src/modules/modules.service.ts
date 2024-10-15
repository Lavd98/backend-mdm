import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Module } from './entities/module.entity';

@Injectable()
export class ModulesService {
  constructor(
    @InjectRepository(Module)
    private modulesRepository: Repository<Module>,
  ) {}

  async findAll(): Promise<Module[]> {
    return this.modulesRepository.find({ where: { isActive: true } });
  }

  async findOne(id: number): Promise<Module> {
    const module = await this.modulesRepository.findOne({ where: { id, isActive: true } });
    if (!module) {
      throw new NotFoundException(`Module with ID "${id}" not found`);
    }
    return module;
  }
}