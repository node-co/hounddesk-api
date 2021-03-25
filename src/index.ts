import initializeServer from './config/initializeServer';
import registerModules from './modules/register';

async function startServer() {
  // Initialize Hapi Server
  const server = initializeServer();
  // Register modules (APIs for this project)
  await registerModules(server);
  // Start the server
  await server.start();
  console.log(`Server running ${server.info.uri}`);
}

(async function init() {
  try {
    await startServer();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
