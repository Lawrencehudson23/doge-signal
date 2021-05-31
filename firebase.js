import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5OI-8WDmUm9s8b53zKiEVAJYdDyIhEvU",
  authDomain: "signal-clone-19c06.firebaseapp.com",
  projectId: "signal-clone-19c06",
  storageBucket: "signal-clone-19c06.appspot.com",
  messagingSenderId: "70707383183",
  appId: "1:70707383183:web:0531f97c6b591217c1d9fa",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
