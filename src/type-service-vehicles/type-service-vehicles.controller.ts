import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TypeServiceVehiclesService } from './type-service-vehicles.service';
import { TypeServiceVehicle } from './entities/type-service-vehicle.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('type-service-vehicles')
@UseGuards(JwtAuthGuard)
export class TypeServiceVehiclesController {
  constructor(private readonly typeServiceVehiclesService: TypeServiceVehiclesService) {}

  @Get()
  findAll(): Promise<TypeServiceVehicle[]> {
    return this.typeServiceVehiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<TypeServiceVehicle> {
    return this.typeServiceVehiclesService.findOne(id);
  }
}