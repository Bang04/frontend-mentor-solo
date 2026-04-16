export type UserRole = "user" | "admin";

export interface JwtPayload {
  sub: string;
  role: UserRole;
  type: "access" | "refresh";
  exp: number;
  iat: number;
}

export interface AuthResult {
  type: "success" | "error";
  message: string;
}

export interface AuthState {
  userId: string | null;
  role: UserRole | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  authResult: AuthResult | null;
  login: (id: string, password: string) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => Promise<boolean>;
  clearAuthResult: () => void;
}
