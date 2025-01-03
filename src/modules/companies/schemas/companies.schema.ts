import { z } from 'zod';

export const createCompanySchema = z.object({
  cnpj: z.string().min(14).max(14),
  email: z.string().email(),
  name: z.string().min(3).max(100),
});
