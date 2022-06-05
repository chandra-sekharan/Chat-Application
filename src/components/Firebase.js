import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp({
apiKey: "AIzaSyDoZzP2CIgbIa6etqavFOkLXqVIUyS5QUM",
  authDomain: "chat-app-7107d.firebaseapp.com",
  projectId: "chat-app-7107d",
  storageBucket: "chat-app-7107d.appspot.com",
  messagingSenderId: "784758996454",
  appId: "1:784758996454:web:5974f7d44a82f40e842a27",
  measurementId: "G-35GD272MH9"
})

const db = firebase.firestore()
const auth = firebase.auth()

export {db , auth} 