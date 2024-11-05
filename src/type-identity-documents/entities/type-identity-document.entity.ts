import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('type_identity_documents')
export class TypeIdentityDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 
    name: 'abbreviation',
    length: 5
  })
  abbreviation: string;

  @Column({ 
    name: 'description',
    length: 100
  })
  description: string;
}