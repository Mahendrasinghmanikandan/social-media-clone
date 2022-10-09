import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVMJ-OBK-zua5KlMBEHKDnb3Gpfjs7ydA",
  authDomain: "blog-d3d19.firebaseapp.com",
  projectId: "blog-d3d19",
  storageBucket: "blog-d3d19.appspot.com",
  messagingSenderId: "520797275089",
  appId: "1:520797275089:web:7618c19b3cfdde844656f0",
  measurementId: "G-4DSQ5NDNJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
