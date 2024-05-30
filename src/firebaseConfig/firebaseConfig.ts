// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDM_Wy5WW_PNCg09t8sGXqNlHDP6qYinRA",
  authDomain: "react-typescript-demo-37314.firebaseapp.com",
  databaseURL:
    "https://react-typescript-demo-37314-default-rtdb.firebaseio.com",
  projectId: "react-typescript-demo-37314",
  storageBucket: "react-typescript-demo-37314.appspot.com",
  messagingSenderId: "356767735418",
  appId: "1:356767735418:web:bff27e85c4df6e2a3ea5c3",
  measurementId: "G-MNRV7J10V2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);

// import { getDatabase, ref, set, push } from "firebase/database";

// const savedData = async () => {
//   const db = getDatabase(app);
//   const newDoc = push(ref(db, "nature/fruits"));
//   set(newDoc, {
//     fruitName: "Thanh Long",
//     fruitDesc: "Nong",
//   }).then(() => {
//     alert("Data saved successfully").catch((error) =>
//       alert("error", error.message)
//     );
//   });
// };
