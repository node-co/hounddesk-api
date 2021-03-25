import { ModulePermissions } from '../../types';

const permissions: Record<string, ModulePermissions> = {
  user: {
    read: 'read:user',
    delete: 'delete:user',
    update: 'update:user',
    list: 'list:users',
    create: 'create:user',
  },
};

export default permissions;
