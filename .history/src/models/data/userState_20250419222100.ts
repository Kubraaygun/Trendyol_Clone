interface Name {
  firstname: string;
  lastname: string;
}

interface Address {
  geolocation: object;
  city: string;
  street: string;
  number: string;
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
