import { PartialType } from '@nestjs/mapped-types';
import { CreateProfilesSubModulesDto } from './create-profiles-sub-module.dto';

export class UpdateProfilesSubModulesDto extends PartialType(CreateProfilesSubModulesDto) {}