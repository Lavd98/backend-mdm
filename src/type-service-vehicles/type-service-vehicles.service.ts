import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeServiceVehicle } from './entities/type-service-vehicle.entity';

@Injectable()
export class TypeServiceVehiclesService {
  constructor(
    @InjectRepository(TypeServiceVehicle)
    private typeServiceVehiclesRepository: Repository<TypeServiceVehicle>,
  ) {}

  async findAll(): Promise<TypeServiceVehicle[]> {
    return this.typeServiceVehiclesRepository.find();
  }

  async findOne(id: number): Promise<TypeServiceVehicle> {
    const typeService = await this.typeServiceVehiclesRepository.findOne({ where: { id } });
    if (!typeService) {
      throw new NotFoundException(`Type service vehicle with ID "${id}" not found`);
    }
    return typeService;
  }
}