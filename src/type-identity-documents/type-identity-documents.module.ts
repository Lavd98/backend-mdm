import { Module } from '@nestjs/common';
import { TypeIdentityDocumentsService } from './type-identity-documents.service';
import { TypeIdentityDocumentsController } from './type-identity-documents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeIdentityDocument } from './entities/type-identity-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeIdentityDocument])],
  controllers: [TypeIdentityDocumentsController],
  providers: [TypeIdentityDocumentsService],
  exports: [TypeIdentityDocumentsService]
})
export class TypeIdentityDocumentsModule {}
