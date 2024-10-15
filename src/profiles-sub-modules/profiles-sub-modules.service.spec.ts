import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesSubModulesService } from './profiles-sub-modules.service';

describe('ProfilesSubModulesService', () => {
  let service: ProfilesSubModulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesSubModulesService],
    }).compile();

    service = module.get<ProfilesSubModulesService>(ProfilesSubModulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
