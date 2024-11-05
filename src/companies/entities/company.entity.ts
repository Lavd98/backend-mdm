import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 
    name: 'business_name',
    length: 200 
  })
  businessName: string;

  @Column({ 
    name: 'business_type',
    length: 50 
  })
  businessType: string;

  @Column({ 
    name: 'manager_name',
    length: 100 
  })
  managerName: string;

  @Column({ 
    length: 11 
  })
  ruc: string;

  @Column({ 
    length: 200 
  })
  address: string;

  @Column({ 
    name: 'expiration_date',
    type: 'date'
  })
  expirationDate: Date;

  @Column({ 
    name: 'manager_position',
    length: 50 
  })
  managerPosition: string;

  @Column({ 
    name: 'is_active',
    default: true 
  })
  isActive: boolean;

  @CreateDateColumn({ 
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP' 
  })
  createdAt: Date;

  @UpdateDateColumn({ 
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP' 
  })
  updatedAt: Date;
}