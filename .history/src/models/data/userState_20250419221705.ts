interface User {
  id: string;
  email: string;
  name: string;
}
interface UserState {
  user: User | null;
  pending: boolean;
  error: any;
  isLogin: boolean;
  token: string | null;
}
