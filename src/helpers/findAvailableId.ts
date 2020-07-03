import { IUser } from "interfaces/user";

export function findAvailableId(db: Array<IUser>) {
  const ids = db.map(user => user.id);
  ids.sort();

  let min = 0;
  while (ids[min]) {
    min++;
  }

  return min;
}
