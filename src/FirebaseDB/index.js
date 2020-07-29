
import * as firebase from 'firebase';

const config =  {
    apiKey: "AIzaSyB_mUlmhz-70ftYvthXO76dczEAE_M7NBI",
    authDomain: "vgareus-1f6f2.firebaseapp.com",
    databaseURL: "https://vgareus-1f6f2.firebaseio.com",
    projectId: "vgareus-1f6f2",
    storageBucket: "vgareus-1f6f2.appspot.com",
    messagingSenderId: "456432683496",
    appId: "1:456432683496:web:b29845c6c62350b5b0bc5d",
    measurementId: "G-12MBHWNG1C"
  };

firebase.initializeApp(config);

export default firebase;
