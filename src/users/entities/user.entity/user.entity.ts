import { Exclude } from 'class-transformer';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  paternalSurname: string;

  @Column()
  maternalSurname: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @ManyToOne(() => Profile)
  @JoinColumn({ name: 'profileId' })
  profile: Profile;

  @Column()
  @Exclude()
  profileId: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true, type: 'datetime' })
  lastLogin: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}