import { z } from 'zod';

export const createCompanySchema = z.object({
  cnpj: z.string(),
  email: z.string(),
  name: z.string(),
});
