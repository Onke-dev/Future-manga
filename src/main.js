// В твоем main.js или header.js
import { auth, onAuthStateChanged } from './js/firebase-api.js';

const accountLink = document.querySelector('.account-user');
const baseUrl = import.meta.env.BASE_URL;

onAuthStateChanged(auth, user => {
  if (accountLink) {
    if (user) {
      // ЮЗЕР ВОШЕЛ
      accountLink.href = `${baseUrl}pages/account/user_account.html`;

      // ДОБАВЛЯЕМ ЗЕЛЕНЫЙ ЦВЕТ
      accountLink.classList.add('is-active');
    } else {
      // ГОСТЬ
      accountLink.href = `${baseUrl}pages/registration/registration.html`;

      // УБИРАЕМ ЗЕЛЕНЫЙ ЦВЕТ (возвращаем стандартный)
      accountLink.classList.remove('is-active');
    }
  }
});
