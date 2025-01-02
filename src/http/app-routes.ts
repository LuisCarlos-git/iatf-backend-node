import { companiesRoutes } from '@/modules/companies/companies.route';
import { FastifyInstance } from 'fastify';

class AppRoutes {
  initializer(router: FastifyInstance) {
    router.register(companiesRoutes.initializer);
  }
}

export const appRoutes = new AppRoutes();
