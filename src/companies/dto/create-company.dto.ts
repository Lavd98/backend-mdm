import { IsNotEmpty, IsString, IsDate, Length, Matches } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 200)
  businessName: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  businessType: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  managerName: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  @Matches(/^[0-9]+$/, { message: 'RUC must contain only numbers' })
  ruc: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 200)
  address: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  expirationDate: Date;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  managerPosition: string;
}