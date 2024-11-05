import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm'; // Importamos Not desde typeorm
import { Person } from './entities/person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const existingPerson = await this.personRepository.findOne({
      where: {
        documentNumber: createPersonDto.documentNumber,
        typeIdentityDocumentsId: createPersonDto.typeIdentityDocumentsId,
        isActive: true
      },
    });

    if (existingPerson) {
      throw new ConflictException('Person with this document number already exists');
    }

    const person = this.personRepository.create(createPersonDto);
    return this.personRepository.save(person);
  }

  async findAll(): Promise<Person[]> {
    return this.personRepository.find({
      where: { isActive: true },
      relations: ['typeIdentityDocument'],
    });
  }

  async findOne(id: number): Promise<Person> {
    const person = await this.personRepository.findOne({
      where: { id, isActive: true },
      relations: ['typeIdentityDocument'],
    });

    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found or inactive`);
    }

    return person;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {
    const person = await this.findOne(id);

    if (updatePersonDto.documentNumber) {
      const existingPerson = await this.personRepository.findOne({
        where: {
          documentNumber: updatePersonDto.documentNumber,
          typeIdentityDocumentsId: updatePersonDto.typeIdentityDocumentsId || person.typeIdentityDocumentsId,
          isActive: true,
          id: Not(id)
        },
      });

      if (existingPerson) {
        throw new ConflictException('Person with this document number already exists');
      }
    }

    Object.assign(person, updatePersonDto);
    return this.personRepository.save(person);
  }

  async remove(id: number): Promise<void> {
    const person = await this.findOne(id);
    person.isActive = false;
    await this.personRepository.save(person);
  }

  async findOneIncludingInactive(id: number): Promise<Person> {
    const person = await this.personRepository.findOne({
      where: { id },
      relations: ['typeIdentityDocument'],
    });

    if (!person) {
      throw new NotFoundException(`Person with ID ${id} not found`);
    }

    return person;
  }
}