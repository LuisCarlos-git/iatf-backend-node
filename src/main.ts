import { appRoutes } from './http/app-routes';
import { appServer } from './http/server';

appServer.on({ port: 3000 });
appRoutes.initializer(appServer.router);
