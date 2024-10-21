import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('type_vehicles')
export class TypeVehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}