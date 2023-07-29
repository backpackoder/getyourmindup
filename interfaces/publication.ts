import { IUser } from "./user";

export interface IPublication {
  _id: string;
  user?: IUser | string;
  body: string;
  isPrivate: boolean;
  type: "gratitude" | "article";
  createdAt?: string;
  updateAt?: string;
  itWasMe?: boolean;
}
