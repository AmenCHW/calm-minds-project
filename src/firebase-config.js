import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_UNSPLASH_KEY}`,
    authDomain: "calm-minds-project.firebaseapp.com",
    projectId: "calm-minds-project",
    storageBucket: "calm-minds-project.appspot.com",
    messagingSenderId: "717780488615",
    appId: "1:717780488615:web:36b6d97999c5170e8c2682",
    measurementId: "G-QXZEMXZ3BL"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)