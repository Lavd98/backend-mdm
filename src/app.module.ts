import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProfilesModule } from './profiles/profiles.module';
import { ModulesModule } from './modules/modules.module';
import { SubModulesModule } from './sub-modules/sub-modules.module';
import { ProfilesSubModulesModule } from './profiles-sub-modules/profiles-sub-modules.module';
import { TypeVehiclesModule } from './type-vehicles/type-vehicles.module';
import { CategoryVehiclesModule } from './category-vehicles/category-vehicles.module';
import { TypeServiceVehiclesModule } from './type-service-vehicles/type-service-vehicles.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: parseInt(configService.get<string>('DATABASE_PORT'), 10),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        autoLoadEntities: true,
      }),
    }),
    AuthModule, 
    UsersModule, ProfilesModule, ModulesModule, SubModulesModule, ProfilesSubModulesModule, TypeVehiclesModule, CategoryVehiclesModule, TypeServiceVehiclesModule, VehiclesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
