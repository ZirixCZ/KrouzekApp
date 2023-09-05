import firebaseApp from "./config";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

export const auth = getAuth(firebaseApp);

setPersistence(auth, browserSessionPersistence);

export const register = async (email: string, password: string) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof FirebaseError) {
      const errorMessage = err.message;
      throw errorMessage;
    } else {
      throw err;
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof FirebaseError) {
      const errorMessage = err.message;
      throw errorMessage;
    } else {
      throw err;
    }
  }
};

export default auth;
