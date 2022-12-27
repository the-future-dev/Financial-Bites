import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import  'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDYqVc8ulk7cLEC5otzC0IrS31sJLWlngY",
    authDomain: "financial-bites.firebaseapp.com",
    databaseURL: "https://financial-bites-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "financial-bites",
    storageBucket: "financial-bites.appspot.com",
    messagingSenderId: "194734410699",
    appId: "1:194734410699:web:a066c3cbbe8d4cda11c44e"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase, firebaseConfig};