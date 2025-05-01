import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";


export async function add(message, managerID, details) {
  try {
    await addDoc(collection(db, "updates"), {
      recipientID: managerID,
      timestamp: serverTimestamp(),
      message: message,
      details: details,
      read: false,
    });
  } catch (error) {
    console.error("Error adding message: ", error);
  }
}
