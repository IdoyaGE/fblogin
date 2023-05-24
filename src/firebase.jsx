// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_Epiw6IHu75gc6g_37EidFr35cy5gUs8",
  authDomain: "fblogin-f7705.firebaseapp.com",
  projectId: "fblogin-f7705",
  storageBucket: "fblogin-f7705.appspot.com",
  messagingSenderId: "830486946168",
  appId: "1:830486946168:web:b9454c831027954dd7288d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
