// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoxDHVVTkRw0ghr7-nJnCT9I-8rKgsLew",
  authDomain: "the-news-dragon-client-231cd.firebaseapp.com",
  projectId: "the-news-dragon-client-231cd",
  storageBucket: "the-news-dragon-client-231cd.appspot.com",
  messagingSenderId: "12157283496",
  appId: "1:12157283496:web:6fd3bfb334f44cb06b669d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;