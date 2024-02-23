// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAqIwDL5plqMDpKa6hGv69QboiNvSyBOR4",
  authDomain: "listenerchat-web.firebaseapp.com",
  projectId: "listenerchat-web",
  storageBucket: "listenerchat-web.appspot.com",
  messagingSenderId: "735160598585",
  appId: "1:735160598585:web:b14a9b03362daf3ee60de8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export  {auth, provider};