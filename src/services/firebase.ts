import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database'

// export const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

export const firebaseConfig = {
    apiKey: "AIzaSyA__O-Q2c8uTjcUWn5ptkxxVqirVIIoBAE",
    authDomain: "letmeask-5136c.firebaseapp.com",
    databaseURL: "https://letmeask-5136c-default-rtdb.firebaseio.com",
    projectId: "letmeask-5136c",
    storageBucket: "letmeask-5136c.appspot.com",
    messagingSenderId: "63194321887",
    appId: "1:63194321887:web:293d8010deeeaca9b82a6a"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }