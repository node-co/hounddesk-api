import * as admin from 'firebase-admin';
import envConfig from '../envConfig';
import { ConfigType } from '../types';

export default function initializeFirebase(
  clientType: ConfigType
): admin.app.App {
  const firebaseCredentials: admin.ServiceAccount = {
    projectId: envConfig.get(`versusClients.${clientType}.projectId`),
    privateKey: envConfig.get(`versusClients.${clientType}.privateKey`),
    clientEmail: envConfig.get(`versusClients.${clientType}.clientEmail`),
  };
  return admin.initializeApp(
    {
      credential: admin.credential.cert(firebaseCredentials),
    },
    `firebase-${clientType}-app`
  );
}
