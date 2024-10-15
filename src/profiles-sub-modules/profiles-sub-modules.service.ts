import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilesSubModules } from './entities/profiles-sub-module.entity';
import { CreateProfilesSubModulesDto } from './dto/create-profiles-sub-module.dto';
import { UpdateProfilesSubModulesDto } from './dto/update-profiles-sub-module.dto';

@Injectable()
export class ProfilesSubModulesService {
  constructor(
    @InjectRepository(ProfilesSubModules)
    private readonly profilesSubModulesRepository: Repository<ProfilesSubModules>,
  ) {}

  create(createProfilesSubModulesDto: CreateProfilesSubModulesDto) {
    const profilesSubModules = this.profilesSubModulesRepository.create(createProfilesSubModulesDto);
    return this.profilesSubModulesRepository.save(profilesSubModules);
  }

  findAll() {
    return this.profilesSubModulesRepository.find({
      where: { isActive: true },
      relations: ['profile', 'subModule'],
    });
  }

  async findOne(id: number) {
    const profilesSubModules = await this.profilesSubModulesRepository.findOne({
      where: { id, isActive: true },
      relations: ['profile', 'subModule'],
    });
    if (!profilesSubModules) {
      throw new NotFoundException(`ProfilesSubModules with ID "${id}" not found`);
    }
    return profilesSubModules;
  }

  async update(id: number, updateProfilesSubModulesDto: UpdateProfilesSubModulesDto) {
    const profilesSubModules = await this.findOne(id);
    Object.assign(profilesSubModules, updateProfilesSubModulesDto);
    return this.profilesSubModulesRepository.save(profilesSubModules);
  }

  async remove(id: number) {
    const profilesSubModules = await this.findOne(id);
    profilesSubModules.isActive = false;
    return this.profilesSubModulesRepository.save(profilesSubModules);
  }
}