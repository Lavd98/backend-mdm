import { Test, TestingModule } from '@nestjs/testing';
import { CategoryVehiclesController } from './category-vehicles.controller';
import { CategoryVehiclesService } from './category-vehicles.service';

describe('CategoryVehiclesController', () => {
  let controller: CategoryVehiclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryVehiclesController],
      providers: [CategoryVehiclesService],
    }).compile();

    controller = module.get<CategoryVehiclesController>(CategoryVehiclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
