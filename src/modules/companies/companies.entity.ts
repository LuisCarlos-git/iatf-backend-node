import { Company, Prisma } from '@prisma/client';

export interface ICreateCompanyInput extends Prisma.CompanyCreateInput {}
export interface ICompany extends Company {}

export interface ICompaniesRepository {
  create(params: ICreateCompanyInput): Promise<void>;
  findByCnpj(cnpj: string): Promise<Company | null>;
}
