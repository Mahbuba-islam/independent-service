



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLCKjghEOxbiBZ0ruOSdMcp2aatwm2UpE",
  authDomain: "independent-service-prov-a59c5.firebaseapp.com",
  projectId: "independent-service-prov-a59c5",
  storageBucket: "independent-service-prov-a59c5.appspot.com",
  messagingSenderId: "272161290193",
  appId: "1:272161290193:web:1c6db042a6057117bd12f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;





