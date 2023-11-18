// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB0NP8vjO7YdyaAVRiRCVfqn00UwMWRREA',
  authDomain: 'insta-project-4f938.firebaseapp.com',
  projectId: 'insta-project-4f938',
  storageBucket: 'insta-project-4f938.appspot.com',
  messagingSenderId: '50432633539',
  appId: '1:50432633539:web:09be3ecadbbbea45615076',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
