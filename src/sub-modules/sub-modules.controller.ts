import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SubModulesService } from './sub-modules.service';
import { SubModule } from './entities/sub-module.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('sub-modules')
@UseGuards(JwtAuthGuard)
export class SubModulesController {
  constructor(private readonly subModulesService: SubModulesService) {}

  @Get()
  findAll(): Promise<SubModule[]> {
    return this.subModulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<SubModule> {
    return this.subModulesService.findOne(id);
  }

  @Get('module/:moduleId')
  findByModuleId(@Param('moduleId', ParseIntPipe) moduleId: number): Promise<SubModule[]> {
    return this.subModulesService.findByModuleId(moduleId);
  }
}