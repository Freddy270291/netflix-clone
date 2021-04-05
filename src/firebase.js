// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvCfzppmHILeYaigM9bA3oZjCKLDrZeNU",
  authDomain: "netflix-clone-4468e.firebaseapp.com",
  projectId: "netflix-clone-4468e",
  storageBucket: "netflix-clone-4468e.appspot.com",
  messagingSenderId: "582877919856",
  appId: "1:582877919856:web:db9853e0bb42c9704192b5",
  measurementId: "G-GJ0GZF4R3W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
