// В твоем main.js или header.js
import { auth, onAuthStateChanged } from './js/firebase-api.js';

onAuthStateChanged(auth, user => {
  if (user) {
    // ЮЗЕР ВОШЕЛ
    console.log('Привет, ', user.email);
    // Здесь можно поменять кнопку "Login" на аватарку или кнопку "My Account"
  } else {
    // ЮЗЕР ВЫШЕЛ
    console.log('Гость');
    // Показываем стандартную кнопку "Login / Sign Up"
  }
});
