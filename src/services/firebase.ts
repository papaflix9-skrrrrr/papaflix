import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCjIbpM4ndql2kFhFOthcuJL_iw0BQWBA",
  authDomain: "papaflix-73542.firebaseapp.com",
  projectId: "papaflix-73542",
  storageBucket: "papaflix-73542.firebasestorage.app",
  messagingSenderId: "122746990475",
  appId: "1:122746990475:web:e68bf9314d25cb3a34c98e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;