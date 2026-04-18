import { auth, onAuthStateChanged } from './firebase-api.js';
import {
  logoutUser,
  changeName,
  changeEmail,
  changePassword,
  deleteUserAccount,
} from './authentication.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ADMIN_EMAIL = `angertina777@ukr.net`;

const refs = {
  btnLogout: document.querySelector('.btn-exit'),
  btnPanel: document.querySelector('#admin-btn'),
  formChangeName: document.querySelector('.js-name'), // ID формы смены имени
  inputNewName: document.querySelector('#user-name'),
  profileName: document.querySelector('.js-profile-name'),
  formChangeEmail: document.querySelector('.js-email'),
  inputEmail: document.querySelector('#user-email'),
  formChangePassword: document.querySelector('.js-password'),
  inputCurrentPassord: document.querySelector('#current-password'),
  inputNewPassord: document.querySelector('#new-password'),
  inputConfirmPassord: document.querySelector('#confirm-password'),
  formDeleteAcc: document.querySelector('.js-delete-account'),
  inputDeleteAcc: document.querySelector('#delete-password'),
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

// --- ИЗМЕНЕНИЕ ИМЕНИ ---
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

// --- ИЗМЕНЕНИЕ EMAIL ---
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

// --- ИЗМЕНЕНИЕ PASSWORD ---
if (refs.formChangePassword) {
  refs.formChangePassword.addEventListener('submit', async e => {
    e.preventDefault();
    const currentPassord = refs.inputCurrentPassord.value.trim();
    const newPassord = refs.inputNewPassord.value.trim();
    const confirmPassord = refs.inputConfirmPassord.value.trim();

    if (!currentPassord || !newPassord || !confirmPassord) {
      iziToast.warning({
        title: 'Warning',
        message: 'Пожалуйста, заполните все поля.',
      });
      return;
    }
    if (newPassord !== confirmPassord) {
      iziToast.error({ title: 'Error', message: 'Новые пароли не совпадают!' });
      return;
    }
    const success = await changePassword(currentPassord, newPassord);
    if (success) {
      // Если всё отлично, очищаем форму
      refs.formChangePassword.reset();
    }
  });
}

// --- DELETE ACCOUNT ---
if (refs.formDeleteAcc) {
  refs.formDeleteAcc.addEventListener('submit', async e => {
    e.preventDefault();
    const password = refs.inputDeleteAcc.value.trim();
    if (!password) {
      iziToast.warning({
        title: 'Warning',
        message: 'Введите пароль для подтверждения.',
      });
      return;
    }
    const isConfirmed = confirm(
      'Вы уверены? Это действие навсегда удалит ваш аккаунт и все данные без возможности восстановления.'
    );
    if (!isConfirmed) return;
    const success = await deleteUserAccount(password);
    if (success) {
      
      const baseUrl = import.meta.env.BASE_URL;
      window.location.replace(`${baseUrl}index.html`);
    }
  });
}
