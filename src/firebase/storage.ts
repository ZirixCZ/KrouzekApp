import firebaseApp from "./config";

import { getStorage, ref, uploadBytes } from "firebase/storage";
import { auth } from "./auth";
const storage = getStorage(firebaseApp);

export const initStorage = async () => {
  // Assuming you have a user object with a UID
  const user = auth.currentUser;

  if (user) {
    const userUid = user.uid;

    const tasksPath = `users/${userUid}/tasks/example.txt`;
    const tasksRef = ref(storage, tasksPath);

    const file = new File(["Hello, World!"], "example.txt", {
      type: "text/plain",
    });

    const upload = uploadBytes(tasksRef, file);
    console.log(upload);
  }
};
