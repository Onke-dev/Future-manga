import { auth, onAuthStateChanged } from './firebase-api.js';

// Выбираем все возможные варианты ссылок на аккаунт
const accountRefs = {
  // Находим и иконку в десктопе, и текст в мобилке
  links: document.querySelectorAll('.account-user, a[data-key="account"]'),
};

onAuthStateChanged(auth, user => {
  accountRefs.links.forEach(link => {
    // Определяем базовый путь, чтобы ссылки не ломались на разных страницах
    const baseUrl = import.meta.env.BASE_URL || '/';

    if (user) {
      // Если залогинен — ведем в личный кабинет
      link.href = `${baseUrl}pages/account/user_account.html`;
    } else {
      // Если гость — ведем на регистрацию/вход
      link.href = `${baseUrl}pages/registration/registration.html`;
    }
  });
});
