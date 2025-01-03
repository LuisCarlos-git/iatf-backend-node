import { ICreateCompanyInput } from '../entities/companies.entity';
import { CompanyAlreadyExistsError } from '../errors/companies.error';
import { companiesRepository } from '../repositories/companies.repository';

export class CompaniesService {
  async createCompany(params: ICreateCompanyInput) {
    const { cnpj, email, name } = params;
    const companyExists = await companiesRepository.findByCnpj(cnpj);

    if (companyExists) {
      throw new CompanyAlreadyExistsError();
    }

    await companiesRepository.create({
      cnpj,
      email,
      name,
    });
  }
}

export const companiesService = new CompaniesService();
