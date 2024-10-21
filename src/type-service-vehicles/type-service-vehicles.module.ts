import { Module } from '@nestjs/common';
import { TypeServiceVehiclesService } from './type-service-vehicles.service';
import { TypeServiceVehiclesController } from './type-service-vehicles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeServiceVehicle } from './entities/type-service-vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeServiceVehicle])],
  controllers: [TypeServiceVehiclesController],
  providers: [TypeServiceVehiclesService],
  exports: [TypeServiceVehiclesService],
})
export class TypeServiceVehiclesModule {}
