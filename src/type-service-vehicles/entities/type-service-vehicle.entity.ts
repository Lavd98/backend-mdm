import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('type_service_vehicles')
export class TypeServiceVehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}