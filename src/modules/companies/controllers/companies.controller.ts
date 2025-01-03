import { FastifyReply, FastifyRequest } from 'fastify';
import { ICreateCompanyInput } from '../entities/companies.entity';
import { companiesService } from '../services/companies.service';
import { CompanyAlreadyExistsError } from '../errors/companies.error';

class CompaniesController {
  async create(
    request: FastifyRequest<{ Body: ICreateCompanyInput }>,
    reply: FastifyReply
  ) {
    try {
      const { cnpj, email, name } = request.body;

      await companiesService.createCompany({
        cnpj,
        email,
        name,
      });

      return reply.status(201);
    } catch (error) {
      if (error instanceof CompanyAlreadyExistsError) {
        return reply.status(500).send({ message: error.message });
      }

      throw error;
    }
  }
}

export const companiesController = new CompaniesController();
