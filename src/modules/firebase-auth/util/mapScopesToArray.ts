import { StringDictionary } from '../types';
export default function mapScopesToArray(
  scopes: Record<string, StringDictionary>
): Array<string> {
  const scopesArray: Array<Array<string>> = [];
  for (const scope of Object.keys(scopes)) {
    scopesArray.push(Object.values(scopes[scope]));
  }
  return scopesArray.flat();
}
