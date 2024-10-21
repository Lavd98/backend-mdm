import { Test, TestingModule } from '@nestjs/testing';
import { TypeVehiclesService } from './type-vehicles.service';

describe('TypeVehiclesService', () => {
  let service: TypeVehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeVehiclesService],
    }).compile();

    service = module.get<TypeVehiclesService>(TypeVehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
