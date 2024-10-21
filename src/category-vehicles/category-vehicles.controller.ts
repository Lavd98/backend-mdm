import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CategoryVehiclesService } from './category-vehicles.service';
import { CategoryVehicle } from './entities/category-vehicle.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('category-vehicles')
@UseGuards(JwtAuthGuard)
export class CategoryVehiclesController {
  constructor(private readonly categoryVehiclesService: CategoryVehiclesService) {}

  @Get()
  findAll(): Promise<CategoryVehicle[]> {
    return this.categoryVehiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<CategoryVehicle> {
    return this.categoryVehiclesService.findOne(id);
  }
}