import Hapi from '@hapi/hapi';
import Joi from '@hapi/joi';

import envConfig from './envConfig';

export default function initializeServer(): Hapi.Server {
  const { host, port, corsOrigins } = envConfig.get('server');
  // Initialize server
  const server = Hapi.server({
    host: host,
    port: port,
    routes: {
      cors: {
        origin: corsOrigins.split(',') || [`${host}:${port}`],
      },
    },
  });
  // Load default validator (recommended Joi)
  server.validator(Joi);
  return server;
}
