import { IsNotEmpty, IsString, IsNumber, IsOptional, Length, Matches, IsBoolean } from 'class-validator';

export class CreatePersonDto {
  @IsNumber()
  @IsNotEmpty()
  typeIdentityDocumentsId: number;

  @IsString()
  @IsNotEmpty()
  @Length(8, 15)
  @Matches(/^[A-Z0-9]+$/, {
    message: 'Document number must contain only uppercase letters and numbers',
  })
  documentNumber: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  fatherLastname: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  motherLastname: string;

  @IsOptional()
  @IsString()
  @Length(5, 200)
  address?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}