export interface IUser {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export type Role = Pick<IUser, 'role'>;
