import mapScopesToArray from './mapScopesToArray';
describe('Utils test suite', () => {
  describe('mapScopesToArray', () => {
    it('should map an object to an array of scopes', () => {
      const expectedScopesArray = [
        'read:books',
        'delete:book',
        'update:book',
        'read:config',
        'delete:config',
        'read:forum',
      ];
      const scopes = {
        books: {
          read: 'read:books',
          delete: 'delete:book',
          update: 'update:book',
        },
        config: {
          read: 'read:config',
          delete: 'delete:config',
        },
        forum: {
          read: 'read:forum',
        },
      };
      expect(mapScopesToArray(scopes)).toEqual(expectedScopesArray);
    });
  });
});
