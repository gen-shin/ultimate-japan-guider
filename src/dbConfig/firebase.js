import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAAU0xC6O3cdWsK-nPlohGozK5lBxBoncQ',
  authDomain: 'ultimate-japan-guider.firebaseapp.com',
  databaseURL: 'https://ultimate-japan-guider.firebaseio.com',
  projectId: 'ultimate-japan-guider',
  storageBucket: 'ultimate-japan-guider.appspot.com',
  messagingSenderId: '986621360207',
  appId: '1:986621360207:web:25e3519c8dfcaabe95d23a',
});

const db = firebaseApp.firestore();

export { db };
