import { IUser } from "interfaces/user";

export function findAvailableId(db: Array<any>) {
  const ids = db.map((x) => x.id);
  ids.sort();

  let min = 0;

  while ((ids[min] || ids[min] === 0) && ids[min] === min) {
    min = min + 1;
  }

  return min;
}
