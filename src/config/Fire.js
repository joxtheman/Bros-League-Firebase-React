import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD0nfJMhKWs9i5nOVeogwX5G1Exg0gwgWE",
  authDomain: "brosleague-d697b.firebaseapp.com",
  databaseURL: "https://brosleague-d697b.firebaseio.com",
  projectId: "brosleague-d697b",
  storageBucket: "",
  messagingSenderId: "235430621421"
};
const fire = firebase.initializeApp(config);
export default fire;
