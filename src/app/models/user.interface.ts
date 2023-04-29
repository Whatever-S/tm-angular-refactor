export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string
}

export interface UserWithCheck extends User {
  checked: boolean;
}