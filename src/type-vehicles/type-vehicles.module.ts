import { Module } from '@nestjs/common';
import { TypeVehiclesService } from './type-vehicles.service';
import { TypeVehiclesController } from './type-vehicles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeVehicle } from './entities/type-vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeVehicle])],
  controllers: [TypeVehiclesController],
  providers: [TypeVehiclesService],
  exports: [TypeVehiclesService],
})
export class TypeVehiclesModule {}
