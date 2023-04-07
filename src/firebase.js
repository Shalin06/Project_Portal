import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs6qS02jIkA4edIn9FkqvPc2L0Dd4L-_8",
  authDomain: "userdatapage.firebaseapp.com",
  databaseURL: "https://userdatapage-default-rtdb.firebaseio.com",
  projectId: "userdatapage",
  storageBucket: "userdatapage.appspot.com",
  messagingSenderId: "526608788897",
  appId: "1:526608788897:web:e243bee34df4adbfeaefe0",
  measurementId: "G-NXLWVBP5NR"
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