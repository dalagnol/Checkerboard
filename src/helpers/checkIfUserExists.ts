import { IUser } from "interfaces/user";

export function checkIfUserExists(db: Array<IUser>, email: string) {
  db.forEach(user => {
    if (user.email === email) {
      throw new Error("User already exists");
    }
  });
}
