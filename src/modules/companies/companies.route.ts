import { FastifyInstance } from 'fastify';
import { companiesController } from './companies.controller';

class CompaniesRoutes {
  initializer(router: FastifyInstance) {
    router.post('/companies', companiesController.create);
  }
}

export const companiesRoutes = new CompaniesRoutes();
