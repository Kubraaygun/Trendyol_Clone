interface User {
  id: string;
  email: string;
  name: string;
}
interface UserState {
  user: User | null;
  pending: boolean;
  error: any;
}
export type {UserState};
