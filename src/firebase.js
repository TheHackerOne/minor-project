import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlX1UO-vbVD2t1v2vVHAipdY8fP6ZaVHQ",
    authDomain: "minor-project-original.firebaseapp.com",
    projectId: "minor-project-original",
    storageBucket: "minor-project-original.appspot.com",
    messagingSenderId: "95130334966",
    appId: "1:95130334966:web:20c1a6839109fc0b101ed7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()