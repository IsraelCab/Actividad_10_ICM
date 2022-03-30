import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0SVuEDKUZjdXC-Ty_5kkXA8gL3hpWieU",
  authDomain: "actividad-10-icm.firebaseapp.com",
  databaseURL: "https://actividad-10-icm-default-rtdb.firebaseio.com",
  projectId: "actividad-10-icm",
  storageBucket: "actividad-10-icm.appspot.com",
  messagingSenderId: "282665042064",
  appId: "1:282665042064:web:7fa16bf44e0f36568a1815"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
