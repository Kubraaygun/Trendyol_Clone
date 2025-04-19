interface Name {
  firstname: string;
  lastname: string;
}

interface User {
  id: string;
  email: string;
  name: Name;
}
interface UserState {
  user: User | null;
  pending: boolean;
  error: any;
}
export type {UserState};
