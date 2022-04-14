
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANbYnbM_VD8Pp9S9lbD_e0yCaD7K2yjqI",
  authDomain: "genious-car-service-e28aa.firebaseapp.com",
  projectId: "genious-car-service-e28aa",
  storageBucket: "genious-car-service-e28aa.appspot.com",
  messagingSenderId: "750330935146",
  appId: "1:750330935146:web:b2e53a15511844ba451713"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;