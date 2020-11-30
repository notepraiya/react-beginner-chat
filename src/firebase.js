import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCpLuNDlfLmj7MXLzdhquCnmqM9yUTbTU8",
  authDomain: "react-beginner-chat.firebaseapp.com",
  databaseURL: "https://react-beginner-chat.firebaseio.com",
  projectId: "react-beginner-chat",
  storageBucket: "react-beginner-chat.appspot.com",
  messagingSenderId: "324749925709",
  appId: "1:324749925709:web:7a65ce74dcc4af60bb2b04",
  measurementId: "G-Y2M0MMPCB2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
