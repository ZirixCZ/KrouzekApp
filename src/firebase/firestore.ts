import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "./config";

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

export default db;
