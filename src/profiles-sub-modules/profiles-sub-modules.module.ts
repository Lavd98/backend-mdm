import { Module } from '@nestjs/common';
import { ProfilesSubModulesService } from './profiles-sub-modules.service';
import { ProfilesSubModulesController } from './profiles-sub-modules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesSubModules } from './entities/profiles-sub-module.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfilesSubModules]),
    UsersModule
  ],
  controllers: [ProfilesSubModulesController],
  providers: [ProfilesSubModulesService],
  exports: [ProfilesSubModulesService],
})
export class ProfilesSubModulesModule {}
