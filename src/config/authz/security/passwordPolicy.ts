// External deps
import Hapi from '@hapi/hapi';
import Hoek from '@hapi/hoek';
import Boom from '@hapi/boom';
import { User } from '@hounddesk/plugin-firebase-users/lib/types';
import { isPasswordValid } from '@hounddesk/password-policy';
import { PasswordPolicyType } from '@hounddesk/password-policy/lib/types';

// Internal deps
import envConfig from '../../envConfig';

export default function passwordPolicy(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): unknown {
  const payload = request.payload as User;
  applyPasswordPolicy(payload.password);
  return h.continue;
}

export function applyPasswordPolicy(password: string): void {
  Hoek.assert(
    isPasswordValid(
      password,
      envConfig.get('securitySettings').passwordPolicy as PasswordPolicyType
    ) === true,
    Boom.badRequest('Invalid password')
  );
}
