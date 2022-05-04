import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAFepCAwBi1Qa8-E2gH3mF7neHPJW2ppE",
  authDomain: "twitter-clone-react-project.firebaseapp.com",
  projectId: "twitter-clone-react-project",
  storageBucket: "twitter-clone-react-project.appspot.com",
  messagingSenderId: "187118721361",
  appId: "1:187118721361:web:fa6e4d2ab49146c32cdb70",
  measurementId: "G-52H01JRJ3M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
