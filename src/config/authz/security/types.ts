export interface PublicUser {
  CitizenId: string;
}

export interface AuthenticatedUser {
  userId: string;
  email: string;
  emailVerified: boolean;
}

export interface UserPayload {
  email: string;
}
