import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'Los nombres deben tener al menos 2 caracteres' })
    nombres: string;
  
    @IsString()
    @MinLength(2, { message: 'El apellido paterno debe tener al menos 2 caracteres' })
    apellidoPaterno: string;
  
    @IsString()
    @MinLength(2, { message: 'El apellido materno debe tener al menos 2 caracteres' })
    apellidoMaterno: string;
  
    @IsString()
    @MinLength(4, { message: 'El nombre de usuario debe tener al menos 4 caracteres' })
    username: string;
  
    @IsEmail({}, { message: 'Debe proporcionar un email válido' })
    email: string;
  
    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}
