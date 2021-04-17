import Hapi from '@hapi/hapi';
import envConfig from '../../config/envConfig';
import initializeFirebase from './initializeFirebase';
import registerAuthzPlugin from './registerAuthzPlugin';
import registerAdminUsersPlugin from './admin/registerUsersPlugin';
import registerPublicUsersPlugin from './public/registerUsersPlugin';
import { PasswordPolicyType } from '@hounddesk/password-policy/lib/types';
import mapScopesToArray from './util/mapScopesToArray';
import publicScopes from './public/scopes';
import adminScopes from './admin/scopes';

export default async function registerPlugins(
  server: Hapi.Server
): Promise<void> {
  const publicFirebaseClientConfig = envConfig.get('authorizationClients')
    .public;
  const adminFirebaseClientConfig = envConfig.get('authorizationClients').admin;
  const publicUsersApp = initializeFirebase({
    projectId: publicFirebaseClientConfig.projectId,
    clientEmail: publicFirebaseClientConfig.clientEmail,
    privateKey: publicFirebaseClientConfig.privateKey,
  });
  const adminUsersApp = initializeFirebase({
    projectId: adminFirebaseClientConfig.projectId,
    clientEmail: adminFirebaseClientConfig.clientEmail,
    privateKey: adminFirebaseClientConfig.privateKey,
  });

  await registerAuthzPlugin(server, publicUsersApp, 'public', 'public', [
    publicScopes.user.read_self,
    publicScopes.user.update_self,
    publicScopes.user.delete_self,
  ]);

  await registerAuthzPlugin(
    server,
    adminUsersApp,
    'admin',
    'admin',
    mapScopesToArray(adminScopes)
  );

  await registerAdminUsersPlugin(
    server,
    adminUsersApp,
    'admin',
    adminFirebaseClientConfig.passwordPolicy as PasswordPolicyType,
    '/admin',
    adminFirebaseClientConfig.signin_url
  );

  await registerPublicUsersPlugin(
    server,
    publicUsersApp,
    'public',
    publicFirebaseClientConfig.passwordPolicy as PasswordPolicyType,
    publicFirebaseClientConfig.signin_url
  );
}
