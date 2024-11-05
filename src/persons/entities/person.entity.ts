import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { TypeIdentityDocument } from '../../type-identity-documents/entities/type-identity-document.entity';

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'type_identity_documents_id' })
  typeIdentityDocumentsId: number;

  @Column({ name: 'document_number', length: 15 })
  documentNumber: string;

  @Column({ name: 'first_name', length: 100 })
  firstName: string;

  @Column({ name: 'father_lastname', length: 100 })
  fatherLastname: string;

  @Column({ name: 'mother_lastname', length: 100 })
  motherLastname: string;

  @Column({ length: 200, nullable: true })
  address?: string;

  @Column({ name: 'is_active', default: true })
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

  @ManyToOne(() => TypeIdentityDocument)
  @JoinColumn({ name: 'type_identity_documents_id' })
  typeIdentityDocument: TypeIdentityDocument;
}