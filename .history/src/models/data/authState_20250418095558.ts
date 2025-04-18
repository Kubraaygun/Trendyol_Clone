interface AuthState {
  user: User | null;
  pending: boolean;
  error: any;
  isLogin: boolean;
}
export type {AuthState};
