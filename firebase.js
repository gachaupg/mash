// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsC0JzH_38KLtX4gKVLY1EtP3kc9AsXAc",
  authDomain: "react-native-45e4f.firebaseapp.com",
  projectId: "react-native-45e4f",
  storageBucket: "react-native-45e4f.appspot.com",
  messagingSenderId: "13472932518",
  appId: "1:13472932518:web:32d4d4f25d6e8ceabaca67"
};

// Initialize Firebase
const auth = firebase.initializeApp(firebaseConfig);

export default auth