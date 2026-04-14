// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAFoelggij4rkzoeKq5twqklpQ3dd4Ycmw',
  authDomain: 'future-manga.firebaseapp.com',
  projectId: 'future-manga',
  storageBucket: 'future-manga.firebasestorage.app',
  messagingSenderId: '1088108462273',
  appId: '1:1088108462273:web:55c30b5dccc18d0795d440',
  measurementId: 'G-YZGBY0PE58',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Экспортируем инструмент auth, чтобы другие файлы могли логинить юзеров
export const auth = getAuth(app);

// Экспортируем сами функции, чтобы вызывать их при клике на кнопки
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
