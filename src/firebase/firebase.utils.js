import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBveagosDdemm4AOCF99p1CUmrkFac-EX0",
  authDomain: "signage-shop-db-5ab38.firebaseapp.com",
  databaseURL: "https://signage-shop-db-5ab38.firebaseio.com",
  projectId: "signage-shop-db-5ab38",
  storageBucket: "signage-shop-db-5ab38.appspot.com",
  messagingSenderId: "630093521677",
  appId: "1:630093521677:web:c17bbc642ba02294308644",
  measurementId: "G-5C0ZZNSC1W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
