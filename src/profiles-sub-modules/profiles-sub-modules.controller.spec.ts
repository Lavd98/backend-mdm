import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesSubModulesController } from './profiles-sub-modules.controller';
import { ProfilesSubModulesService } from './profiles-sub-modules.service';

describe('ProfilesSubModulesController', () => {
  let controller: ProfilesSubModulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilesSubModulesController],
      providers: [ProfilesSubModulesService],
    }).compile();

    controller = module.get<ProfilesSubModulesController>(ProfilesSubModulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
