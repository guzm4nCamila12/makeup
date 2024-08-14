import {initializeApp} from "firebase/app";
import {getAuth, GithubAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrMCKlyNuwucTH6Ybura-141BWn_Vqahs",
  authDomain: "makeup-61bad.firebaseapp.com",
  projectId: "makeup-61bad",
  storageBucket: "makeup-61bad.appspot.com",
  messagingSenderId: "465241807254",
  appId: "1:465241807254:web:67f7266ccd1336a8b265b7",
  measurementId: "G-FZFQ2KHQ7C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GithubAuthProvider();

export {auth, provider}
