import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Profile } from '../../profiles/entities/profile.entity';
import { SubModule } from '../../sub-modules/entities/sub-module.entity';

@Entity('profiles_sub_modules')
export class ProfilesSubModules {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'profile_id' })
  profileId: number;

  @Column({ name: 'sub_module_id' })
  subModuleId: number;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'create', default: false })
  create: boolean;

  @Column({ default: false })
  edit: boolean;

  @Column({ name: 'delete', default: false })
  delete: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Profile)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @ManyToOne(() => SubModule)
  @JoinColumn({ name: 'sub_module_id' })
  subModule: SubModule;
}