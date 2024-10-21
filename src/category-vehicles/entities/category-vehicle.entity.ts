import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('category_vehicles')
export class CategoryVehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;
}