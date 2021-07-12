import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSRZ3iJi1qd909bm8_hjH070UWxUXQTEY",
    authDomain: "disney-plus-clone-4df1d.firebaseapp.com",
    projectId: "disney-plus-clone-4df1d",
    storageBucket: "disney-plus-clone-4df1d.appspot.com",
    messagingSenderId: "945528923855",
    appId: "1:945528923855:web:1a721ba8cf2046aa5139ba",
    measurementId: "G-FBCWRPN5MN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export { auth, provider, storage }
  export default db