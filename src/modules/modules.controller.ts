import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { Module } from './entities/module.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('modules')
@UseGuards(JwtAuthGuard)
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Get()
  findAll(): Promise<Module[]> {
    return this.modulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Module> {
    return this.modulesService.findOne(id);
  }
}