import { Test, TestingModule } from '@nestjs/testing';
import { CategoryVehiclesService } from './category-vehicles.service';

describe('CategoryVehiclesService', () => {
  let service: CategoryVehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryVehiclesService],
    }).compile();

    service = module.get<CategoryVehiclesService>(CategoryVehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
