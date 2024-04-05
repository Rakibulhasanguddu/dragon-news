// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDu2tBuiVXwFP1xLaWdynti-m6dnFuXRA",
  authDomain: "dragon-news-2db3e.firebaseapp.com",
  projectId: "dragon-news-2db3e",
  storageBucket: "dragon-news-2db3e.appspot.com",
  messagingSenderId: "781194943840",
  appId: "1:781194943840:web:cc92d54d87514177ec5205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;