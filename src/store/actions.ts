import { User } from "../types/products";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

const User = async (users: User): Promise<Actions> => {
  await firebase.saveProductInDB(users);
  return {
    action: SomeActions.SAVE_USER,
    payload: users,
  };
};