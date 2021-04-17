# Hounddesk Authorization and Authentication

By default, Hounddesk comes with Firebase plugins as the default Authz system.
You can leverage the Hapi plugin ecosystem to use any other available Auth strategy you need.

Take into account Hounddesk api provides services for our public facing users and admin users.

We provide by default a firebase strategy that supports administrative routes.
We encourage you to use a separate pool of users, that means, to keep 2 separate projects in Firebase.
Our firebase plugins are organized around that concept.

![firebase logo](https://avatars.githubusercontent.com/u/1335026?s=200&v=4)

## How the firebase plugins works

Authentication and authorization are something core for our application, we need to provide mechanisms for:

- Authenticating users (gmail, facebook, email/password, etc)
- Manage users (create user, get user, list users, delete users) for Admin and public facing users
- Authorization (with fine grained control for service consumption) i.e prevent unauthorized access to restricted resources or forbidding access to unauthenticated users.
- Provide strong password policies.

In order to provide such functionally we created some nice firebase plugins in order to handle each specific case

### Firebase plugins

| Name                                                                                               |                Type                |
| -------------------------------------------------------------------------------------------------- | :--------------------------------: |
| [@hounddesk/plugin-firebase-authz](https://www.npmjs.com/package/@hounddesk/plugin-firebase-authz) |           Authorization            |
| [@hounddesk/plugin-firebase-users](https://www.npmjs.com/package/@hounddesk/plugin-firebase-users) | Authentication and User management |
| [@hounddesk/password-policy](https://www.npmjs.com/package/@hounddesk/password-policy)             |          Password policy           |

## How firebase-auth module works (this module)

1. Initialize firebase configuration via initializeFirebase.ts using official Firebase Node.js SDK firebase-admin
2. Register firebase hapi plugin as auth strategy in registerAuthzPlugin.ts

The Firebase service account is initialized via service account object inline instead of a path to a service account key JSON file, in order to have a better flexible way for configuration management.
In our case we store that configuration via environment variables

Example

    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: "<PROJECT_ID>",
            clientEmail: "foo@<PROJECT_ID>.iam.gserviceaccount.com",
            privateKey: "-----BEGIN PRIVATE KEY-----<KEY>-----END PRIVATE KEY-----\n"
        }),
        databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
    });

In order to work you need to provide the following:

- projectId
- clientEmail
- privateKey

You can get that information via Firebase console in **project settings section > Service accounts > Firebase admin SDK > Generate new private key**
Open the private key file and you will find the data you need there.

- We store that configuration locally in an .env file and you can check the secrets names in env.example but you can load that configuration in any other way if you need to.
- Check **config/envConfig.ts** for more information.

### Password policy

Firebase lacks of proper support for password policies when using username / password, we provide a [hapi password policy plugin](https://www.npmjs.com/package/@hounddesk/password-policy) that uses [Auth0's password policy package](https://github.com/auth0/password-sheriff)

### Using Email/Password authentication with Firebase

If you want to use this provider, you need to enable it first in Firebase console (Authentication > Sign-in method > Email/Password).

The Firebase plugin receives the signinUrl (optional), since we provide Firebase as default auth strategy, we have an environment variable for it (HOUNDDESK_PUBLIC_FIREBASE_SIGNIN_URL and HOUNDDESK_ADMIN_FIREBASE_SIGNIN_URL), the url will look like this:

Sign in url: **https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[Web API Key]**

Once you enable Email/Password provider a Web API Key will be available in **Project settings > Your project**
