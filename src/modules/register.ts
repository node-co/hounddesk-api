import Hapi from '@hapi/hapi';
// Import modules here
import TestModule from './test';
import registerPlugins from './firebase-auth/registerPlugins';

export default async function registerModules(
  server: Hapi.Server
): Promise<void> {
  // Auth plugins
  await registerPlugins(server);
  await server.register({
    plugin: TestModule,
  });
}
