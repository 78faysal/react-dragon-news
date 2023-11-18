import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCtEKTH53YVs15Z-l4d-PocdTBzk2MUMRw",
  authDomain: "react-dragon-news-b66e1.firebaseapp.com",
  projectId: "react-dragon-news-b66e1",
  storageBucket: "react-dragon-news-b66e1.appspot.com",
  messagingSenderId: "180415917799",
  appId: "1:180415917799:web:ae649104d1daee726bbc42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app)