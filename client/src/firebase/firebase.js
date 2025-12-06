import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmMsdyvqZJ4VgEiODuz-vwfVxO8hclZhE",
  authDomain: "cachupin2.firebaseapp.com",
  projectId: "cachupin2",
 
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);