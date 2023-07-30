export interface IActionsByUser {
  _id: string;
  user: string;
  actionsDone: ActionDone[]
  createdAt?: string;
  updateAt?: string;
}

interface ActionDone {
  story: string;
  actionDone: string;
  _id: string;
}