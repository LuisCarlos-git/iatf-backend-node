import {
  ICompaniesRepository,
  ICompany,
  ICreateCompanyInput,
} from './companies.entity';
import { primsaClient } from '@/lib/prisma';

class CompaniesRepository implements ICompaniesRepository {
  async create(params: ICreateCompanyInput): Promise<void> {
    const { cnpj, email, name } = params;

    await primsaClient.company.create({
      data: {
        cnpj,
        email,
        name,
      },
    });
  }

  async findByCnpj(cnpj: string): Promise<ICompany | null> {
    return await primsaClient.company.findUnique({
      where: {
        cnpj,
      },
    });
  }
}

export const companiesRepository = new CompaniesRepository();
