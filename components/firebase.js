import firebase from 'firebase/app'
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyDR4XQBpRQxMDQ_G8quRrQ_vbZ8VzEv9Ak",
    authDomain: "creare-87972.firebaseapp.com",
    databaseURL: "https://creare-87972.firebaseio.com",
    projectId: "creare-87972",
    storageBucket: "creare-87972.appspot.com",
    messagingSenderId: "93613088996",
    appId: "1:93613088996:web:395395c78b53e6b6344cf1",
    measurementId: "G-PTG94333T9"
  };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage()

export {storage, firebase as default}