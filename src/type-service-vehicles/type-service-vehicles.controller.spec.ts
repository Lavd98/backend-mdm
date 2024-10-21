import { Test, TestingModule } from '@nestjs/testing';
import { TypeServiceVehiclesController } from './type-service-vehicles.controller';
import { TypeServiceVehiclesService } from './type-service-vehicles.service';

describe('TypeServiceVehiclesController', () => {
  let controller: TypeServiceVehiclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeServiceVehiclesController],
      providers: [TypeServiceVehiclesService],
    }).compile();

    controller = module.get<TypeServiceVehiclesController>(TypeServiceVehiclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
