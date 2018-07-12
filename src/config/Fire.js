import firebase from "firebase";

const config = {
  apiKey: "YOUR API_KEY",
  authDomain: "FIREBASE",
  databaseURL: "FIREBASE_DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "",
  messagingSenderId: ""
};
const fire = firebase.initializeApp(config);
export default fire;
