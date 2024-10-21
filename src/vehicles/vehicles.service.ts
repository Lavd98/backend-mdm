import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepository: Repository<Vehicle>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const existingVehicles = await this.findByPlate(createVehicleDto.plate);

    if (existingVehicles.length > 0) {
      throw new ConflictException(`A vehicle with plate ${createVehicleDto.plate} already exists`);
    }

    const vehicle = this.vehiclesRepository.create({
      ...createVehicleDto,
      isActive: true
    });

    return this.vehiclesRepository.save(vehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehiclesRepository.find({ 
      where: { isActive: true }, 
      relations: ['categoryVehicle', 'typeVehicle', 'typeServiceVehicle'] 
    });
  }

  async findOne(id: number): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.findOne({ 
      where: { id, isActive: true },
      relations: ['categoryVehicle', 'typeVehicle', 'typeServiceVehicle']
    });
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID "${id}" not found`);
    }
    return vehicle;
  }

   async update(id: number, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    const vehicle = await this.findOne(id);
    
    if (updateVehicleDto.plate && updateVehicleDto.plate !== vehicle.plate) {
      const existingVehicles = await this.findByPlate(updateVehicleDto.plate);
      if (existingVehicles.length > 0) {
        throw new ConflictException(`A vehicle with plate ${updateVehicleDto.plate} already exists`);
      }
    }
    
    Object.assign(vehicle, updateVehicleDto);
    return this.vehiclesRepository.save(vehicle);
  }

  async remove(id: number): Promise<void> {
    const vehicle = await this.findOne(id);
    vehicle.isActive = false;
    await this.vehiclesRepository.save(vehicle);
  }

  async findByPlate(plate: string): Promise<Vehicle[]> {
    const normalizedPlate = plate.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return this.vehiclesRepository.find({
      where: {
        plate: Like(`%${normalizedPlate}%`),
        isActive: true
      },
      relations: ['categoryVehicle', 'typeVehicle', 'typeServiceVehicle']
    });
  }
}