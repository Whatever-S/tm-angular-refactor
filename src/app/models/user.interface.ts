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

export interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  avatar: string
  checked?: boolean;
}