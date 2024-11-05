import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TypeIdentityDocumentsService } from './type-identity-documents.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('type-identity-documents')
@UseGuards(JwtAuthGuard)
export class TypeIdentityDocumentsController {
  constructor(
    private readonly typeIdentityDocumentsService: TypeIdentityDocumentsService,
  ) {}

  @Get()
  findAll() {
    return this.typeIdentityDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.typeIdentityDocumentsService.findOne(id);
  }
}