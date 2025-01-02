import { FastifyReply, FastifyRequest } from 'fastify';
import { ICreateCompanyInput } from './companies.entities';
import { companiesService } from './companies.service';

class CompaniesController {
  async create(
    request: FastifyRequest<{ Body: ICreateCompanyInput }>,
    reply: FastifyReply
  ) {
    const { cnpj, email, name } = request.body;

    await companiesService.createCompany({
      cnpj,
      email,
      name,
    });

    reply.status(201);
  }
}

export const companiesController = new CompaniesController();
