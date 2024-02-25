// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS52G4t1_Vd15q8sJpWEACzZxmp-8YjOw",
  authDomain: "laundry-app-yt-a5cbd.firebaseapp.com",
  projectId: "laundry-app-yt-a5cbd",
  storageBucket: "laundry-app-yt-a5cbd.appspot.com",
  messagingSenderId: "78330140419",
  appId: "1:78330140419:web:2e6caa379e8fb323e9bb36",
  measurementId: "G-062X8BENT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
