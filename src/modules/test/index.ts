import Hapi from '@hapi/hapi';
// Types
import { HapiPlugin } from '@hounddesk/bones-types';

const testModule: HapiPlugin<unknown> = {
  name: 'test-module',
  multiple: false,
  register: function (server: Hapi.Server): void {
    const routePrefix = '';
    server.route({
      method: 'GET',
      path: `${routePrefix}/test`,
      options: {
        notes: 'Consumed by Public client',
        description: 'Check the API is responding',
        auth: false,
      },
      handler: (
        request: Hapi.Request,
        h: Hapi.ResponseToolkit
      ): Hapi.ResponseObject =>
        h
          .response({
            message: 'Hooray Hounddesk service is running!',
          })
          .code(200),
    });
  },
};

export default testModule;
