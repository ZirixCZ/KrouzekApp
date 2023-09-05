import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  query,
  setDoc,
  where,
  doc,
} from "firebase/firestore";
import firebaseApp from "./config";
import { auth } from "./auth";

const db = getFirestore(firebaseApp);

export async function getValidCodesFromFirestore() {
  try {
    const data: any = [];
    const querySnapshot = await getDocs(collection(db, "codes"));

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return data;
  } catch (error) {
    console.error("Error reading Firestore data:", error);
    throw error;
  }
}

export const createUser = async () => {
  const user = auth.currentUser;
  if (user) {
    const usersCollection = collection(db, "users");
    const userUid = user.uid;

    // Use the user's UID as the document name (also known as the document ID)
    const userDocumentRef = doc(usersCollection, userUid);
    const setDocument = setDoc(userDocumentRef, {
      name: "John Doe",
      email: user.email,
    });
  }
};

export default db;
