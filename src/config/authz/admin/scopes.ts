import roles from './roles';
import permissions from './permissions';

export default {
  [roles.root]: new Set([
    permissions.user.read,
    permissions.user.delete,
    permissions.user.update,
    permissions.user.list,
    permissions.user.create,
  ]),
};
