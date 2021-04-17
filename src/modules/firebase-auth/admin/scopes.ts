const scopes = {
  user: {
    read: 'read:user',
    delete: 'delete:user',
    update: 'update:user',
    create: 'create:user',
    list: 'list:user',
  },
  config: {
    read: 'read:config',
    update: 'update:config',
  },
};

export default scopes;
