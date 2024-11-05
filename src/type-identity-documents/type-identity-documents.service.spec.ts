import { Test, TestingModule } from '@nestjs/testing';
import { TypeIdentityDocumentsService } from './type-identity-documents.service';

describe('TypeIdentityDocumentsService', () => {
  let service: TypeIdentityDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeIdentityDocumentsService],
    }).compile();

    service = module.get<TypeIdentityDocumentsService>(TypeIdentityDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
