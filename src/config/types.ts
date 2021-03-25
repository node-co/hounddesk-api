import { ServerApplicationState } from '@hapi/hapi';
import { Connection } from 'typeorm';
import * as admin from 'firebase-admin';

export enum ConfigType {
  Public = 'public',
  Admin = 'admin',
}

export enum EnvironmentType {
  Development = 'development',
  Production = 'production',
  Stage = 'stage',
}
export enum DatabaseType {
  mysql = 'mysql',
  mariadb = 'mariadb',
  postgres = 'postgres',
  mssql = 'mssql',
}

export interface DatabaseConfig {
  name: string;
  username: string;
  password: string;
  host: string;
  type: DatabaseType;
  port: number;
  logging: boolean;
  modelsPath: string;
  migrationsPath: string;
  synchronize: boolean;
}

export interface DatabaseAvailabilityCheck {
  isAvailable: boolean;
  reason?: string;
}

export interface Firebase {
  projectId: string;
  privateKey: string;
  clientEmail: string;
  signin_url: string;
}

export interface AuthzClient {
  public: Firebase;
  admin: Firebase;
}

export enum FirebaseStrategy {
  Public = 'firebase-public',
  Admin = 'firebase-admin',
}

export interface Server {
  host: string;
  port: number;
  environment: string;
  corsOrigins: string;
}

export interface RoutesConfig {
  adminPrefix: string;
}

export interface SecuritySettings {
  passwordPolicy: string;
}

export interface BugsnapSettings {
  apiKey: string;
  enabled: boolean;
  enableInfoLogs: boolean;
  stoutOnly: boolean;
  releaseStage: string;
}

export interface Configuration {
  authorizationClients: AuthzClient;
  server: Server;
  database: DatabaseConfig;
  routesConfig: RoutesConfig;
  securitySettings: SecuritySettings;
}

export interface ApplicationState extends ServerApplicationState {
  connection: Connection;
  publicFirebaseService: admin.app.App;
}

export interface ModulePermissions {
  read?: string;
  update?: string;
  delete?: string;
  list?: string;
  create?: string;
}
