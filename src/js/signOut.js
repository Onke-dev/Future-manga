import { auth, onAuthStateChanged } from './firebase-api.js';
import { logoutUser } from './authentication.js';

const ADMIN_EMAIL = `angertina777@ukr.net`;

const refs = {
  btnLogout: document.querySelector('.btn-exit'),
  btnPanel: document.querySelector('#admin-btn'),
};

onAuthStateChanged(auth, user => {
  // ДИАГНОСТИКА: Выводим данные в консоль (F12)
  console.log('Текущий email юзера:', user ? user.email : 'Гость');
  console.log('Найдена ли кнопка в HTML?', refs.btnPanel);

  if (user) {
    // Используем toLowerCase(), чтобы исключить ошибку регистра (например, если почта начинается с большой буквы)
    if (user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      console.log('✅ Это админ! Даю команду показать кнопку.');

      if (refs.btnPanel) {
        // Попробуем flex или inline-block, иногда block ломает верстку
        refs.btnPanel.style.display = 'flex';
        // Принудительно делаем видимым, если где-то висит класс
        refs.btnPanel.style.visibility = 'visible';
      }
    } else {
      console.log('❌ Это обычный юзер. Прячу кнопку.');
      if (refs.btnPanel) refs.btnPanel.style.display = 'none';
    }
  } else {
    if (refs.btnPanel) refs.btnPanel.style.display = 'none';
  }
});

if (refs.btnLogout) {
  refs.btnLogout.addEventListener('click', async () => {
    // Блокируем кнопку на долю секунды, пока идет запрос
    refs.btnLogout.disabled = true;

    // Вызываем нашу функцию выхода
    const isSuccess = await logoutUser();

    if (isSuccess) {
      // Если выход прошел успешно, перекидываем юзера на главную страницу
      const baseUrl = import.meta.env.BASE_URL;
      setTimeout(() => {
        window.location.href = `${baseUrl}index.html`;
      }, 1000);
    } else {
      // Если что-то пошло не так, разблокируем кнопку
      refs.btnLogout.disabled = false;
    }
  });
}
