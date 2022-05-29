import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5LOd370t0qzHTWcH5jZceiFtZlwFfGr8",
    authDomain: "isocial-web-app.firebaseapp.com",
    projectId: "isocial-web-app",
    storageBucket: "isocial-web-app.appspot.com",
    messagingSenderId: "479241546164",
    appId: "1:479241546164:web:5dae5aae36532a4aa0aae1",
    measurementId: "G-WP0JNWKHB1"
  };
  
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);