import { Test, TestingModule } from '@nestjs/testing';
import { TypeVehiclesController } from './type-vehicles.controller';
import { TypeVehiclesService } from './type-vehicles.service';

describe('TypeVehiclesController', () => {
  let controller: TypeVehiclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeVehiclesController],
      providers: [TypeVehiclesService],
    }).compile();

    controller = module.get<TypeVehiclesController>(TypeVehiclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
