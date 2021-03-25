import Hapi from '@hapi/hapi';
// Import modules here
import TestModule from './test';

export default async function registerModules(
  server: Hapi.Server
): Promise<void> {
  await server.register({
    plugin: TestModule,
  });
}
