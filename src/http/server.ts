import fastify, { FastifyListenOptions } from 'fastify';

export class AppServer {
  private _router = fastify();

  on(ots: FastifyListenOptions) {
    this._router.listen(ots, () => {
      console.log(`Server listening on ${ots.port}`);
    });
  }

  get router() {
    return this._router;
  }
}

export const appServer = new AppServer();
