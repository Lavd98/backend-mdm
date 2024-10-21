import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TypeVehiclesService } from './type-vehicles.service';
import { TypeVehicle } from './entities/type-vehicle.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('type-vehicles')
@UseGuards(JwtAuthGuard)
export class TypeVehiclesController {
  constructor(private readonly typeVehiclesService: TypeVehiclesService) {}

  @Get()
  findAll(): Promise<TypeVehicle[]> {
    return this.typeVehiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<TypeVehicle> {
    return this.typeVehiclesService.findOne(id);
  }
}