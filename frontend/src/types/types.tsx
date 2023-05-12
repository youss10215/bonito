import { AdminUser } from '@/schemas';

export interface IUser {
  email: string;
  id: number;
  username: string;
}

export const users: IUser[] = [
  {
    email: 'john.doe@gmail.com',
    id: 1,
    username: 'Johnny'
  },
  {
    email: 'toto@gmail.com',
    id: 2,
    username: 'Toto'
  }
];
