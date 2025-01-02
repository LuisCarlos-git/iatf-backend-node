import fastify, { FastifyListenOptions } from 'fastify';
import {
  hasZodFastifySchemaValidationErrors,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod';

export class AppServer {
  private _router = fastify();

  private _routerConfig() {
    this._router.setValidatorCompiler(validatorCompiler);
    this._router.setSerializerCompiler(serializerCompiler);
    this._router.withTypeProvider<ZodTypeProvider>();
  }

  private errorConfig() {
    this._router.setErrorHandler((error, _, reply) => {
      if (hasZodFastifySchemaValidationErrors(error)) {
        return reply.status(400).send({
          message: 'Validation error.',
          issues: error.validation.map((item) => ({
            path: item.params.issue.path[0],
            message: item.message,
          })),
        });
      }
      return reply
        .status(500)
        .send({ message: 'Internal server error.', details: error });
    });
  }

  on(ots: FastifyListenOptions) {
    this._routerConfig();
    this._router.listen(ots, () => {
      console.log(`Server listening on ${ots.port}`);
    });
    this.errorConfig();
  }

  get router() {
    return this._router;
  }
}

export const appServer = new AppServer();
