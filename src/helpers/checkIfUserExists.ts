import { IUser } from "interfaces/user";

export function checkIfUserExists(
  db: Array<IUser>,
  name: string,
  email: string
) {
  db.forEach(user => {
    if (user.name === name) {
      throw new Error("Name is already being used");
    }
    if (user.email === email) {
      throw new Error("Email is already being used");
    }
  });
}
