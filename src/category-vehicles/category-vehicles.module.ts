import { Module } from '@nestjs/common';
import { CategoryVehiclesService } from './category-vehicles.service';
import { CategoryVehiclesController } from './category-vehicles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryVehicle } from './entities/category-vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryVehicle])],
  controllers: [CategoryVehiclesController],
  providers: [CategoryVehiclesService],
  exports: [CategoryVehiclesService],
})
export class CategoryVehiclesModule {}
