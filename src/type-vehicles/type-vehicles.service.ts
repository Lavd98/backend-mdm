import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeVehicle } from './entities/type-vehicle.entity';

@Injectable()
export class TypeVehiclesService {
  constructor(
    @InjectRepository(TypeVehicle)
    private typeVehiclesRepository: Repository<TypeVehicle>,
  ) {}

  findAll(): Promise<TypeVehicle[]> {
    return this.typeVehiclesRepository.find();
  }

  findOne(id: number): Promise<TypeVehicle> {
    return this.typeVehiclesRepository.findOne({ where: { id } });
  }
}