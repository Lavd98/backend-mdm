import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const existingCompany = await this.companyRepository.findOne({
      where: { ruc: createCompanyDto.ruc, isActive: true }
    });

    if (existingCompany) {
      throw new ConflictException('Company with this RUC already exists');
    }

    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(company);
  }

  async findAll(isActive?: boolean): Promise<Company[]> {
    const where = isActive !== undefined ? { isActive } : {};
    return this.companyRepository.find({ where });
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.companyRepository.findOne({
      where: { id, isActive: true }
    });

    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }

    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.findOne(id);

    if (updateCompanyDto.ruc) {
      const existingCompany = await this.companyRepository.findOne({
        where: { 
          ruc: updateCompanyDto.ruc, 
          isActive: true,
          id: Not(id)
        }
      });

      if (existingCompany) {
        throw new ConflictException('Company with this RUC already exists');
      }
    }

    Object.assign(company, updateCompanyDto);
    return this.companyRepository.save(company);
  }

  async remove(id: number): Promise<Company> {
    const company = await this.findOne(id);
    company.isActive = false;
    return this.companyRepository.save(company);
  }
}