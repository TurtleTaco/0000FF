import * as firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBgjYWyFifwTu7gCzt9ENJq5jdgsOPLYYM",
  authDomain: "shop-tailwind.firebaseapp.com",
  databaseURL: "https://shop-tailwind.firebaseio.com",
  projectId: "shop-tailwind",
  storageBucket: "shop-tailwind.appspot.com",
  messagingSenderId: "442205590725",
  appId: "1:442205590725:web:b48d2c1eb1ef98d66d4cac",
  measurementId: "G-MC72V0HE00",
});

const db = firebase.firestore();
// const storage = firebase.storage().ref();

export default db;
