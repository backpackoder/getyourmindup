export interface IUser {
  _id: string;
  name: string;
  email: string;
  sex: string;
  age: string;
  profession: string;
  liveWith: string;
  level: number;
  passions: string;
  hasPet: boolean;
  password?: string;
  role?: string;
  createdAt?: string;
  updateAt?: string;
}
