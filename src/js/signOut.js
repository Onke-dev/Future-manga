import { auth, onAuthStateChanged } from './firebase-api.js';
import { logoutUser, changeName, changeEmail } from './authentication.js';

const ADMIN_EMAIL = `angertina777@ukr.net`;

const refs = {
  btnLogout: document.querySelector('.btn-exit'),
  btnPanel: document.querySelector('#admin-btn'),
  formChangeName: document.querySelector('.js-name'), // ID формы смены имени
  formChangeEmail: document.querySelector('.js-email'),
  inputNewName: document.querySelector('#user-name'),
  profileName: document.querySelector('.js-profile-name'),
  inputEmail: document.querySelector('#user-email'),
};

onAuthStateChanged(auth, user => {
  console.log('Текущий email юзера:', user ? user.email : 'Гость');

  if (user) {
    // 1. Получаем имя один раз для всего
    const displayName = user.displayName || user.email.split('@')[0];

    // 2. Ставим имя под аватарку (отдельный блок)
    if (refs.profileName) {
      refs.profileName.textContent = displayName;
    }

    if (refs.inputEmail) {
      refs.inputEmail.placeholder = user.email;
    }

    // 3. Ставим плейсхолдер в инпут (ОТДЕЛЬНЫЙ БЛОК)
    if (refs.inputNewName) {
      console.log('Инпут найден, ставлю плейсхолдер:', displayName); // <-- Добавил проверку
      refs.inputNewName.placeholder = displayName;
    }

    // 4. Логика для админ-панели
    if (user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      if (refs.btnPanel) {
        refs.btnPanel.style.display = 'flex';
        refs.btnPanel.style.visibility = 'visible';
      }
    } else {
      if (refs.btnPanel) refs.btnPanel.style.display = 'none';
    }
  } else {
    const baseUrl = import.meta.env.BASE_URL;

    window.location.replace(`${baseUrl}index.html`);
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

// 1. Изменение имени
if (refs.formChangeName) {
  refs.formChangeName.addEventListener('submit', async e => {
    e.preventDefault(); // Останавливаем перезагрузку страницы

    // Получаем введенное имя
    const newName = refs.inputNewName.value.trim();

    // Если поле пустое, просто выходим
    if (!newName) return;

    // Вызываем функцию из authentication.js
    const isSuccess = await changeName(newName);

    if (isSuccess) {
      // Обновляем текст под аватаркой
      if (refs.profileName) refs.profileName.textContent = newName;

      // НОВАЯ СТРОЧКА: Сразу обновляем placeholder на новое имя
      if (refs.inputNewName) refs.inputNewName.placeholder = newName;
      refs.formChangeName.reset(); // Очищаем поле, если всё прошло успешно
    }
  });
}

if (refs.formChangeEmail) {
  refs.formChangeEmail.addEventListener('submit', async e => {
    e.preventDefault(); // Останавливаем перезагрузку страницы

    // Получаем введенное имя
    const newEmail = refs.inputEmail.value.trim();

    // Если поле пустое, просто выходим
    if (!newEmail) return;

    // Вызываем функцию из authentication.js
    const isSuccess = await changeEmail(newEmail);

    if (isSuccess) {
      // НОВАЯ СТРОЧКА: Сразу обновляем placeholder на новое имя
      if (refs.inputEmail) refs.inputEmail.placeholder = newEmail;
      refs.formChangeEmail.reset();
    }
  });
}
