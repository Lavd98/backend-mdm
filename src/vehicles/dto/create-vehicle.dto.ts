import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  plate: string;

  @IsNumber()
  categoryVehicleId: number;

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  color: string;

  @IsString()
  engine: string;

  @IsString()
  vin: string;

  @IsString()
  serialNumber: string;

  @IsNumber()
  manufactureYear: number;

  @IsNumber()
  modelYear: number;

  @IsString()
  bodyType: string;

  @IsString()
  owner: string;

  @IsString()
  cardNumber: string;

  @IsNumber()
  typeVehicleId: number;

  @IsNumber()
  typeServiceVehicleId: number;
}