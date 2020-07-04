import { IUser } from "interfaces/user";

export function findAvailableId(db: Array<IUser>) {
  const ids = db.map(user => user.id);
  ids.sort();

  let min = 0;

  while ((ids[min] || ids[min] === 0) && ids[min] === min) {
    min = min + 1;
  }

  return min;
}
