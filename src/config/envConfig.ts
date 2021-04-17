/**
 * Environment variables configuration.
 * Locally you can add your own .env file using .env.example as a guidance.
 */

import convict from 'convict';
import dotenv from 'dotenv';
import { PasswordPolicyType } from '@hounddesk/password-policy/lib/types';
import { EnvironmentType, Configuration, DatabaseType } from './types';

// Load environment for development
if (
  process.env.ENVIRONMENT !== EnvironmentType.Production &&
  process.env.ENVIRONMENT !== EnvironmentType.Stage
) {
  dotenv.config();
}

// Parse Private Key (used for Firebase)
function parseKey(keyName: string) {
  if (process.env[keyName]) {
    process.env[keyName] = process.env[keyName]?.replace(/\\n/g, '\n');
  }
}

(function parsePrivateKeys() {
  parseKey('HOUNDDESK_PUBLIC_FIREBASE_PRIVATE_KEY');
  parseKey('HOUNDDESK_ADMIN_FIREBASE_PRIVATE_KEY');
})();

export default convict<Configuration>({
  authorizationClients: {
    public: {
      projectId: {
        format: '*',
        default: '',
        env: 'HOUNDDESK_PUBLIC_FIREBASE_PROJECT_ID',
      },
      privateKey: {
        format: '*',
        env: 'HOUNDDESK_PUBLIC_FIREBASE_PRIVATE_KEY',
        default: '',
        sensitive: true,
      },
      clientEmail: {
        format: String,
        env: 'HOUNDDESK_PUBLIC_FIREBASE_CLIENT_EMAIL',
        default: '',
        sensitive: true,
      },
      signin_url: {
        format: String,
        env: 'HOUNDDESK_PUBLIC_FIREBASE_SIGNIN_URL',
        default: '',
        sensitive: true,
      },
      passwordPolicy: {
        default: 'low',
        format: [
          PasswordPolicyType.Complex,
          PasswordPolicyType.Easy,
          PasswordPolicyType.Low,
          PasswordPolicyType.Medium,
          PasswordPolicyType.Normal,
        ],
        env: 'HOUNDDESK_PUBLIC_POLICY_TYPE',
      },
    },
    admin: {
      projectId: {
        format: '*',
        default: '',
        env: 'HOUNDDESK_ADMIN_FIREBASE_PROJECT_ID',
      },
      privateKey: {
        format: '*',
        env: 'HOUNDDESK_ADMIN_FIREBASE_PRIVATE_KEY',
        default: '',
        sensitive: true,
      },
      clientEmail: {
        format: String,
        env: 'HOUNDDESK_ADMIN_FIREBASE_CLIENT_EMAIL',
        default: '',
        sensitive: true,
      },
      signin_url: {
        format: String,
        env: 'HOUNDDESK_ADMIN_FIREBASE_SIGNIN_URL',
        default: '',
        sensitive: true,
      },
      passwordPolicy: {
        default: 'low',
        format: [
          PasswordPolicyType.Complex,
          PasswordPolicyType.Easy,
          PasswordPolicyType.Low,
          PasswordPolicyType.Medium,
          PasswordPolicyType.Normal,
        ],
        env: 'HOUNDDESK_ADMIN_POLICY_TYPE',
      },
    },
  },
  server: {
    port: {
      format: Number,
      default: 8084,
      env: 'PORT',
    },
    host: {
      format: String,
      default: '0.0.0.0',
      env: 'HOST',
    },
    environment: {
      default: 'development',
      format: String,
      env: 'NODE_ENV',
    },
    corsOrigins: {
      format: String,
      default: '',
      env: 'CORS_ORIGINS',
    },
  },
  database: {
    host: {
      format: String,
      default: 'localhost',
      env: 'DB_HOST',
    },
    port: {
      format: Number,
      default: 5432,
      env: 'DB_PORT',
    },
    name: {
      format: String,
      default: '',
      env: 'DB_NAME',
    },
    username: {
      format: String,
      default: '',
      env: 'DB_USER',
      sensitive: true,
    },
    password: {
      format: String,
      default: '',
      env: 'DB_PWD',
      sensitive: true,
    },
    type: {
      format: String,
      default: DatabaseType.postgres,
    },
    logging: {
      format: Boolean,
      default: false,
      env: 'DB_ENABLE_LOGGING',
    },
    modelsPath: {
      format: String,
      default: '/models/*.js',
      env: 'DB_MODELS_PATH',
    },
    migrationsPath: {
      format: String,
      default: './migrations/**/*.ts',
      env: 'DB_MIGRATIONS_PATH',
    },
    synchronize: {
      format: Boolean,
      default: false,
      env: 'DB_SYNCHRONIZE',
    },
  },
  routesConfig: {
    adminPrefix: {
      format: String,
      default: '/admin',
      env: 'ROUTES_ADMIN_PREFIX',
    },
    publicPrefix: {
      format: String,
      default: '/user',
      env: 'ROUTES_PUBLIC_PREFIX',
    },
  },
});
