import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = this.profilesRepository.create(createProfileDto);
    return await this.profilesRepository.save(profile);
  }

  async findAll(isActive?: boolean): Promise<Profile[]> {
    const whereCondition = isActive !== undefined ? { isActive } : {};
    return await this.profilesRepository.find({ where: whereCondition });
  }

  async findOne(id: number): Promise<Profile> {
    const profile = await this.profilesRepository.findOne({ where: { id, isActive: true } });
    if (!profile) {
      throw new NotFoundException(`Profile with ID "${id}" not found`);
    }
    return profile;
  }

  async update(id: number, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    const profile = await this.findOne(id);
    Object.assign(profile, updateProfileDto);
    return await this.profilesRepository.save(profile);
  }

  async remove(id: number): Promise<void> {
    const profile = await this.findOne(id);
    profile.isActive = false;
    await this.profilesRepository.save(profile);
  }
}