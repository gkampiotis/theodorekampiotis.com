// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUiXe474f-EbI2BTsWFDOs_SCBOa0lDKI",
  authDomain: "theodore-retro-react-8a481.firebaseapp.com",
  projectId: "theodore-retro-react-8a481",
  storageBucket: "theodore-retro-react-8a481.appspot.com",
  messagingSenderId: "1034557979421",
  appId: "1:1034557979421:web:39b8a994fcf3045650bff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const projectStorage = getStorage(app)
export const projectFirestore = getFirestore(app);

