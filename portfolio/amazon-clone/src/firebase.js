import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnRw3lVxQ1JHDRBhib_Sw8Y3aRetOTBwk",
    authDomain: "clone-dd825.firebaseapp.com",
    projectId: "clone-dd825",
    storageBucket: "clone-dd825.appspot.com",
    messagingSenderId: "356619788461",
    appId: "1:356619788461:web:085703005a43720a69a624",
    measurementId: "G-R5BDBXBE3D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }