import { Test, TestingModule } from '@nestjs/testing';
import { TypeIdentityDocumentsController } from './type-identity-documents.controller';
import { TypeIdentityDocumentsService } from './type-identity-documents.service';

describe('TypeIdentityDocumentsController', () => {
  let controller: TypeIdentityDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeIdentityDocumentsController],
      providers: [TypeIdentityDocumentsService],
    }).compile();

    controller = module.get<TypeIdentityDocumentsController>(TypeIdentityDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
