import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDntWvbNChCEN_ov6mIboGx1EjoIaW_Llg",
  authDomain: "intelliprep-de488.firebaseapp.com",
  projectId: "intelliprep-de488",
  storageBucket: "intelliprep-de488.firebasestorage.app",
  messagingSenderId: "892362735733",
  appId: "1:892362735733:web:21f2bcd39cf0955ec1f83c",
  measurementId: "G-R4HVX5TR1S",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);