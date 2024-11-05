import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeIdentityDocument } from './entities/type-identity-document.entity';
import { TypeIdentityDocumentDto } from './dto/type-identity-document.dto';

@Injectable()
export class TypeIdentityDocumentsService {
  constructor(
    @InjectRepository(TypeIdentityDocument)
    private readonly typeIdentityDocumentRepository: Repository<TypeIdentityDocument>,
  ) {}

  async findAll(): Promise<TypeIdentityDocumentDto[]> {
    return this.typeIdentityDocumentRepository.find();
  }

  async findOne(id: number): Promise<TypeIdentityDocumentDto> {
    const document = await this.typeIdentityDocumentRepository.findOne({
      where: { id }
    });

    if (!document) {
      throw new NotFoundException(`Type Identity Document with ID ${id} not found`);
    }

    return document;
  }
}
