import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CategoryVehicle } from '../../category-vehicles/entities/category-vehicle.entity';
import { TypeVehicle } from '../../type-vehicles/entities/type-vehicle.entity';
import { TypeServiceVehicle } from '../../type-service-vehicles/entities/type-service-vehicle.entity';
import { Exclude } from 'class-transformer';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plate: string;

  @ManyToOne(() => CategoryVehicle)
  @JoinColumn({ name: 'category_vehicle_id' })
  categoryVehicle: CategoryVehicle;

  @Column({ name: 'category_vehicle_id' })
  @Exclude({ toPlainOnly: true })
  categoryVehicleId: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  color: string;

  @Column()
  engine: string;

  @Column()
  vin: string;

  @Column({ name: 'serial_number' })
  serialNumber: string;

  @Column({ name: 'manufacture_year' })
  manufactureYear: number;

  @Column({ name: 'model_year' })
  modelYear: number;

  @Column({ name: 'body_type' })
  bodyType: string;

  @Column()
  owner: string;

  @Column({ name: 'card_number' })
  cardNumber: string;

  @ManyToOne(() => TypeVehicle)
  @JoinColumn({ name: 'type_vehicle_id' })
  typeVehicle: TypeVehicle;

  @Column({ name: 'type_vehicle_id' })
  @Exclude({ toPlainOnly: true })
  typeVehicleId: number;

  @ManyToOne(() => TypeServiceVehicle)
  @JoinColumn({ name: 'type_service_vehicle_id' })
  typeServiceVehicle: TypeServiceVehicle;

  @Column({ name: 'type_service_vehicle_id' })
  @Exclude({ toPlainOnly: true })
  typeServiceVehicleId: number;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}