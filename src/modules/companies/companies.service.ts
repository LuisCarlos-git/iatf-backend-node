import { ICreateCompanyInput } from './companies.entity';
import { CompanyAlreadyExistsError } from './companies.error';
import { companiesRepository } from './companies.repository';

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
