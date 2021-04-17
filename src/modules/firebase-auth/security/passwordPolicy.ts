import Hapi from '@hapi/hapi';
import Hoek from '@hapi/hoek';
import Boom from '@hapi/boom';
import { User } from '@hounddesk/plugin-firebase-users/lib/types';
import { isPasswordValid } from '@hounddesk/password-policy';
import { PasswordPolicyType } from '@hounddesk/password-policy/lib/types';

export default function (policyType: PasswordPolicyType) {
  return function passwordPolicy(
    request: Hapi.Request,
    h: Hapi.ResponseToolkit
  ): unknown {
    const payload = request.payload as User;
    applyPasswordPolicy(payload.password, policyType);
    return h.continue;
  };
}

export function applyPasswordPolicy(
  password: string,
  policyType: PasswordPolicyType
): void {
  Hoek.assert(
    isPasswordValid(password, policyType) === true,
    Boom.badRequest('Invalid password')
  );
}
