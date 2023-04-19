import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY2NDoJ8nCyCQPW7Jg32TGH-xWWWGZWUo",
  authDomain: "projectportalweb.firebaseapp.com",
  projectId: "projectportalweb",
  storageBucket: "projectportalweb.appspot.com",
  messagingSenderId: "205596481440",
  appId: "1:205596481440:web:9cf627d8eeed63e570f6c5",
  measurementId: "G-CF1YF9M46Y"
};

// Initialize Firebase

// const auth = app.getAuth() 
// const auth = app.auth
// export default auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database  = getDatabase(app)
export const storage = getStorage(app)
export default app;