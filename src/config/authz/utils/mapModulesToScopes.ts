import { ModulePermissions } from '../../types';

/**
 * Creates a new Array of strings of scopes from a permissions list.
 */
export default (modules: Record<string, ModulePermissions>): Array<string> => {
  const scopes: Array<string> = [];
  const modulesList = Object.keys(modules);
  for (const module of modulesList) {
    const scopesForModule = modules[module];
    for (const scope in scopesForModule) {
      scopes.push(scopesForModule[scope]);
    }
  }
  return scopes;
};
