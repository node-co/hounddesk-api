import roles from './roles';
import permissions from './permissions';

export default {
  [roles.user]: new Set([permissions.user.read, permissions.user.update]),
};
