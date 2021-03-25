import { ModulePermissions } from '../../types';

const permissions: Record<string, ModulePermissions> = {
  user: {
    read: 'read:user',
    update: 'update:user',
    delete: 'delete:user',
  },
};
export default permissions;
