import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC4x-2BaPJ1pKk5USkNRly74r1kwWOWVNM",
    authDomain: "thumbshare-2020.firebaseapp.com",
    databaseURL: "https://thumbshare-2020.firebaseio.com",
    projectId: "thumbshare-2020",
    storageBucket: "thumbshare-2020.appspot.com",
    messagingSenderId: "403365503094",
    appId: "1:403365503094:web:ba40e402efd1472f92bf57",
    measurementId: "G-5JQE2KVYEM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const storage = firebase.storage();
  export {firebase as default, firestore, storage};
//   firebase.analytics();