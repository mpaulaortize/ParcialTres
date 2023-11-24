import firebase from "firebase/compat/app";
import "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    name: "",
    color:"",
    letter:"",
  });
  console.log("name:", .name);
} catch (e) {
  console.error("Error adding document: ", e);
}