import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBBN97q-nDAaj5PGgfMCWF1TWiCjVwFNLo",
    authDomain: "clone-af1e7.firebaseapp.com",
    projectId: "clone-af1e7",
    storageBucket: "clone-af1e7.appspot.com",
    messagingSenderId: "487251503358",
    appId: "1:487251503358:web:02ed143940e39003229daf"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export default db;
