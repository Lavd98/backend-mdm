import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilesSubModules } from './entities/profiles-sub-module.entity';
import { CreateProfilesSubModulesDto } from './dto/create-profiles-sub-module.dto';
import { UpdateProfilesSubModulesDto } from './dto/update-profiles-sub-module.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfilesSubModulesService {
  constructor(
    @InjectRepository(ProfilesSubModules)
    private readonly profilesSubModulesRepository: Repository<ProfilesSubModules>,
    private usersService: UsersService,
  ) { }

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

  async findByUserId(userId: string) {
    const { profileId } = await this.usersService.findOne(userId);
    return await this.findByProfileId(profileId);
    // return this.profilesSubModulesRepository.query(`
    //   SELECT psm.*
    //   FROM profiles_sub_modules psm
    //   INNER JOIN profiles p ON psm.profile_id = p.id
    //   INNER JOIN sub_modules sm ON psm.sub_module_id = sm.id
    //   INNER JOIN modules m ON sm.module_id = m.id
    //   INNER JOIN users u ON u.profile_id = p.id
    //   WHERE u.id = ? AND psm.is_active = true
    // `, [userId]);
  }

  async findByProfileId(profileId: number) {
    return this.profilesSubModulesRepository
      .createQueryBuilder('psm')
      .where('psm.profile_id = :profileId', { profileId })
      .andWhere('psm.is_active = :isActive', { isActive: true })
      .getMany();
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