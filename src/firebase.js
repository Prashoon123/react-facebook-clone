import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFPVfd9pDrNkkX2uIXAbXK3Rcmh9EXFNM",
    authDomain: "facebook-clone-ece17.firebaseapp.com",
    databaseURL: "https://facebook-clone-ece17.firebaseio.com",
    projectId: "facebook-clone-ece17",
    storageBucket: "facebook-clone-ece17.appspot.com",
    messagingSenderId: "92698122307",
    appId: "1:92698122307:web:c98841b2801e326cfc9cf6",
    measurementId: "G-T27W50XQ4Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;