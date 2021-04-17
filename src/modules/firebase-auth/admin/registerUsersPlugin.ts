import Hapi from '@hapi/hapi';
import * as admin from 'firebase-admin';
import pluginFirebaseUsers from '@hounddesk/plugin-firebase-users';
import { PasswordPolicyType } from '@hounddesk/password-policy/lib/types';
import passwordPolicy from '../security/passwordPolicy';
import { UserAction } from '@hounddesk/plugin-firebase-users/lib/types';
import scopes from './scopes';
export default async function registerUsersPlugin(
  server: Hapi.Server,
  firebaseApp: admin.app.App,
  strategy: string,
  passwordPolicyType: PasswordPolicyType,
  routePrefix: string,
  signinUrl?: string
): Promise<void> {
  // Register authorization strategy (Firebase JWT)
  await server.register({
    plugin: pluginFirebaseUsers,
    options: {
      isPublicAPI: false,
      logger: console,
      serviceAccount: firebaseApp,
      passwordPolicy: passwordPolicy(passwordPolicyType),
      routePrefix: routePrefix,
      signin_url: signinUrl,
      strategies: [
        {
          actionName: UserAction.GetById,
          scope: scopes.user.read,
          strategy,
        },
        {
          actionName: UserAction.Delete,
          scope: scopes.user.delete,
          strategy,
        },
        {
          actionName: UserAction.Update,
          scope: scopes.user.update,
          strategy,
        },
        {
          actionName: UserAction.List,
          scope: scopes.user.list,
          strategy,
        },
        // If you need to create root admin user, you need to remove this scope
        {
          actionName: UserAction.Create,
          scope: scopes.user.create,
          strategy,
        },
      ],
    },
  });
}
