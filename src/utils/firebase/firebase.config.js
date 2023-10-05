import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7hHuBntKN6O9iW_LCfyMRvSkNN3uEfAg",
  authDomain: "the-daily-dragon-news.firebaseapp.com",
  projectId: "the-daily-dragon-news",
  storageBucket: "the-daily-dragon-news.appspot.com",
  messagingSenderId: "970761139829",
  appId: "1:970761139829:web:4b6ec020c2e3b4b8072a3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
