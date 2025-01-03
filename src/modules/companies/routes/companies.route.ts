import { FastifyInstance } from 'fastify';
import { companiesController } from '../controllers/companies.controller';
import { createCompanySchema } from '../schemas/companies.schema';

class CompaniesRoutes {
  initializer(router: FastifyInstance) {
    router.post(
      '/companies',
      { schema: { body: createCompanySchema } },
      companiesController.create
    );
  }
}

export const companiesRoutes = new CompaniesRoutes();
