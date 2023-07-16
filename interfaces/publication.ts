import { IUser } from "./user";

export interface IPublication {
  _id: string;
  user?: IUser;
  body: string;
  isPrivate: boolean;
  type: "gratitude" | "article";
  createdAt?: string;
  updateAt?: string;
}
