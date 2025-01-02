import { ICreateCompanyInput } from './companies.entities';
import { companiesRepository } from './companies.repository';

export class CompaniesService {
  async createCompany(params: ICreateCompanyInput) {
    const { cnpj, email, name } = params;
    const companyExists = await companiesRepository.findByCnpj(cnpj);

    if (companyExists) {
      throw new Error('Company already exists');
    }

    await companiesRepository.create({
      cnpj,
      email,
      name,
    });
  }
}

export const companiesService = new CompaniesService();
