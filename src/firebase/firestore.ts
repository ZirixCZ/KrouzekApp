import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import firebaseApp from "./config";
import { auth } from "./auth";
import { CodeInterface } from "../types/code";

const db = getFirestore(firebaseApp);

export async function getValidCodesFromFirestore() {
  try {
    const data: CodeInterface[] = [];
    const querySnapshot = await getDocs(collection(db, "codes"));

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      data.push({
        code: docData.code,
        name: docData.name,
        surname: docData.surname,
      });
    });

    return data;
  } catch (error) {
    console.error("Error reading Firestore data:", error);
    throw error;
  }
}

export const createUser = async (code: CodeInterface) => {
  const user = auth.currentUser;
  if (user) {
    const usersCollection = collection(db, "users");
    const userUid = user.uid;

    const userDocumentRef = doc(usersCollection, userUid);
    setDoc(userDocumentRef, {
      name: code.name,
      surname: code.surname,
      email: user.email,
    });
  }
};

export default db;
