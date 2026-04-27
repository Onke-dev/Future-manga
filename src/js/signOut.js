import { auth, onAuthStateChanged } from './firebase-api.js';
import {
  logoutUser,
  changeName,
  changeEmail,
  changePassword,
  deleteUserAccount,
  uploadAvatar,
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

  formPhoto: document.querySelector('.js-photo'),
  imgAvatar: document.querySelector('.img-settings, .image-user'),
  sourcesAvatar: document.querySelectorAll(
    '.img-change picture source, .wrap-img-user picture source'
  ),
  btnTriggerLoad: document.querySelector('.load'), // Кнопка с иконкой
  inputFile: document.querySelector('#avatar-upload'), // Наш скрытый инпут
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

    if (refs.imgAvatar && user.photoURL) {
      refs.imgAvatar.src = user.photoURL;
      // Удаляем дефолтные адаптивные заглушки, чтобы они не перебивали кастомную фотку
      if (refs.sourcesAvatar) {
        refs.sourcesAvatar.forEach(source => source.remove());
      }
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
      localStorage.removeItem('userAvatar');
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

    // Получаем введенный email
    const newEmail = refs.inputEmail.value.trim();

    // Если поле пустое, просто выходим
    if (!newEmail) return;

    // =========================================================
    // ПРОВЕРКА EMAIL (только англ. буквы, цифры и знаки почты)
    // =========================================================
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(newEmail)) {
      iziToast.error({
        title: 'Error',
        message: 'Please use only English letters and numbers for your email.',
        position: 'topRight',
      });
      return; // Зупиняємо виконання, якщо є кирилиця
    }

    // Вызываем функцию из authentication.js
    const isSuccess = await changeEmail(newEmail);

    if (isSuccess) {
      // Сразу обновляем placeholder на новый email
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

    // 1. Проверка на пустые поля
    if (!currentPassord || !newPassord || !confirmPassord) {
      iziToast.warning({
        title: 'Warning',
        message: 'Пожалуйста, заполните все поля.',
        position: 'topRight',
      });
      return;
    }

    // =========================================================
    // 2. ПРОВЕРКА НОВОГО ПАРОЛЯ (только англ. буквы и цифры, МИНИМУМ 6 СИМВОЛОВ)
    // =========================================================
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

    if (!passwordRegex.test(newPassord)) {
      iziToast.error({
        title: 'Error',
        message:
          'New password must be at least 6 characters long and contain ONLY English letters and numbers.',
        position: 'topRight',
      });
      return;
    }

    // 3. Проверка совпадения паролей
    if (newPassord !== confirmPassord) {
      iziToast.error({
        title: 'Error',
        message: 'Новые пароли не совпадают!',
        position: 'topRight',
      });
      return;
    }

    // 4. Отправка в Firebase
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

// --- ИЗМЕНЕНИЕ АВАТАРКИ ---

// Переменная, которая будет хранить файл до того, как мы нажмем "Upload"
let selectedFile = null;

// 1. При клике на иконку (.load) — открываем системное окно выбора файла
if (refs.btnTriggerLoad && refs.inputFile) {
  refs.btnTriggerLoad.addEventListener('click', () => {
    refs.inputFile.click();
  });
}

// 2. Когда файл выбран — делаем предпросмотр
if (refs.inputFile) {
  refs.inputFile.addEventListener('change', e => {
    selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Создаем временную ссылку на картинку прямо в браузере (без интернета)
    const previewUrl = URL.createObjectURL(selectedFile);

    // Показываем предпросмотр
    if (refs.imgAvatar) {
      refs.imgAvatar.src = previewUrl;

      // Сносим <source>, чтобы предпросмотр сработал на всех экранах
      if (refs.sourcesAvatar) {
        refs.sourcesAvatar.forEach(source => source.remove());
      }
    }
  });
}

// 3. Отправка формы в Firebase по кнопке "Upload"
if (refs.formPhoto) {
  refs.formPhoto.addEventListener('submit', async e => {
    e.preventDefault();

    if (!selectedFile) {
      iziToast.info({
        title: 'Info',
        message: 'Сначала выберите новое фото с помощью иконки!',
      });
      return;
    }

    // Ищем кнопку сабмита, чтобы заблокировать её от двойного клика
    const btnSubmit = refs.formPhoto.querySelector('.btn-upload-newImg');
    if (btnSubmit) btnSubmit.disabled = true;

    // Слегка затеняем картинку для эффекта загрузки
    if (refs.imgAvatar) refs.imgAvatar.style.opacity = '0.5';

    // ВЫЗЫВАЕМ ФУНКЦИЮ ИЗ authentication.js!
    const newPhotoUrl = await uploadAvatar(selectedFile);

    // Возвращаем как было
    if (refs.imgAvatar) refs.imgAvatar.style.opacity = '1';
    if (btnSubmit) btnSubmit.disabled = false;

    if (newPhotoUrl) {
      localStorage.setItem('userAvatar', newPhotoUrl);
      selectedFile = null; // Очищаем временный файл
      refs.inputFile.value = ''; // Очищаем инпут

      // Если у тебя есть маленькая аватарка где-то еще (например в хедере)
      // refs.headerAvatar.src = newPhotoUrl;
    }
  });
}

// ==========================================
// 1. МАГИЯ КЭША: Мгновенно ставим фотку из памяти браузера
// ==========================================
const cachedPhoto = localStorage.getItem('userAvatar');
if (cachedPhoto && refs.imgAvatar) {
  refs.imgAvatar.src = cachedPhoto;
  if (refs.sourcesAvatar) {
    refs.sourcesAvatar.forEach(source => source.remove());
  }
}
