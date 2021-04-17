import * as admin from 'firebase-admin';
import { FirebaseProject } from './types';

export default function initializeFirebase(
  project: FirebaseProject
): admin.app.App {
  const firebaseCredentials: admin.ServiceAccount = {
    projectId: project.projectId,
    privateKey: project.privateKey,
    clientEmail: project.clientEmail,
  };
  return admin.initializeApp(
    {
      credential: admin.credential.cert(firebaseCredentials),
    },
    `firebase-${project.projectId}-app`
  );
}
