import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { AuthErrors } from './errors/auth.errors';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByUsername(username);
        if (!user) {
            AuthErrors.authenticationFailed();
        }
        
        const isPasswordValid = await bcrypt.compare(pass, user.password);
        if (!isPasswordValid) {
            AuthErrors.invalidCredentials();
        }
        
        const { password, ...result } = user;
        return result;
      }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        const token = this.jwtService.sign(payload);
        return {
            token: token,
            user: {
                id: user.id,
                username: user.username,
                lastLogin: new Date().toISOString()
            }
        }
    }
}