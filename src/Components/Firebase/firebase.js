import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEeCpdlFwYnW16Q5k2pZzyQ6X2cI2Ej0k",
  authDomain: "login-app-9a946.firebaseapp.com",
  projectId: "login-app-9a946",
  storageBucket: "login-app-9a946.appspot.com",
  messagingSenderId: "813102573959",
  appId: "1:813102573959:web:79761d5bd6f7f27be04b22",
  measurementId: "G-58NLD4Y31M",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
