import { Test, TestingModule } from '@nestjs/testing';
import { TypeServiceVehiclesService } from './type-service-vehicles.service';

describe('TypeServiceVehiclesService', () => {
  let service: TypeServiceVehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeServiceVehiclesService],
    }).compile();

    service = module.get<TypeServiceVehiclesService>(TypeServiceVehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
