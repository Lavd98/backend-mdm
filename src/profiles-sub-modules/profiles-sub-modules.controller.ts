import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProfilesSubModulesService } from './profiles-sub-modules.service';
import { CreateProfilesSubModulesDto } from './dto/create-profiles-sub-module.dto';
import { UpdateProfilesSubModulesDto } from './dto/update-profiles-sub-module.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('profiles-sub-modules')
@UseGuards(JwtAuthGuard)
export class ProfilesSubModulesController {
  constructor(private readonly profilesSubModulesService: ProfilesSubModulesService) {}

  @Post()
  create(@Body() createProfilesSubModulesDto: CreateProfilesSubModulesDto) {
    return this.profilesSubModulesService.create(createProfilesSubModulesDto);
  }

  @Get()
  findAll() {
    return this.profilesSubModulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesSubModulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfilesSubModulesDto: UpdateProfilesSubModulesDto) {
    return this.profilesSubModulesService.update(+id, updateProfilesSubModulesDto);
  }

  @Delete(':id')
  deactivate(@Param('id') id: string) {
    return this.profilesSubModulesService.remove(+id);
  }
}