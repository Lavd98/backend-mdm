import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryVehicle } from './entities/category-vehicle.entity';

@Injectable()
export class CategoryVehiclesService {
  constructor(
    @InjectRepository(CategoryVehicle)
    private categoryVehiclesRepository: Repository<CategoryVehicle>,
  ) {}

  async findAll(): Promise<CategoryVehicle[]> {
    return this.categoryVehiclesRepository.find();
  }

  async findOne(id: number): Promise<CategoryVehicle> {
    const category = await this.categoryVehiclesRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category vehicle with ID "${id}" not found`);
    }
    return category;
  }
}