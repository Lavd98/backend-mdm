import { IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateProfilesSubModulesDto {
  @IsNumber()
  profileId: number;

  @IsNumber()
  subModuleId: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsBoolean()
  @IsOptional()
  create?: boolean;

  @IsBoolean()
  @IsOptional()
  edit?: boolean;

  @IsBoolean()
  @IsOptional()
  delete?: boolean;
}