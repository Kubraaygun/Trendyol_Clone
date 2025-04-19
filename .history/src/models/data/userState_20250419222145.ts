interface Name {
  firstname: string;
  lastname: string;
}

interface Geolocation {
  last: string;
  long: string;
}

interface Address {
  geolocation: object;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface User {
  id: string;
  email: string;
  name: Name;
  phone: string;
  address: Address;
}
interface UserState {
  user: User | null;
  pending: boolean;
  error: any;
}
export type {UserState};
