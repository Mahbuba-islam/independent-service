// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSmquvkI6FqZI1iXTPA6ffYXRmMnoQ2E0",
  authDomain: "email-password-auth-85879.firebaseapp.com",
  projectId: "email-password-auth-85879",
  storageBucket: "email-password-auth-85879.appspot.com",
  messagingSenderId: "638748921600",
  appId: "1:638748921600:web:891d6e711b5560684aede5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;