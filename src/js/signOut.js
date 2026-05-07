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

let isAuthActionInProgress = false;

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
      console.log('Input found, adding a placeholder:', displayName); // <-- Добавил проверку
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
    refs.btnLogout.disabled = true;

    // Блокуємо миттєвий редирект слухача!
    isAuthActionInProgress = true;

    const isSuccess = await logoutUser();

    if (isSuccess) {
      localStorage.removeItem('userAvatar');
      // Тепер setTimeout спокійно відпрацює
      const baseUrl = import.meta.env.BASE_URL;
      setTimeout(() => {
        window.location.href = `${baseUrl}index.html`;
      }, 1000); // Можеш зробити 2000, якщо додаси iziToast і сюди
    } else {
      // Якщо помилка - знімаємо блокування
      isAuthActionInProgress = false;
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

    // ==========================================
    // ПЕРЕВІРКА НА ДОВЖИНУ (МАКСИМУМ 20 СИМВОЛІВ)
    // ==========================================
    if (newName.length > 20) {
      iziToast.error({
        title: 'Error',
        message: 'Your name cannot exceed 20 characters.',
        position: 'topRight',
      });
      return; // Зупиняємо відправку
    }

    // Вызываем функцию из authentication.js
    const isSuccess = await changeName(newName);

    if (isSuccess) {
      // Обновляем текст под аватаркой
      if (refs.profileName) refs.profileName.textContent = newName;

      // Сразу обновляем placeholder на новое имя
      if (refs.inputNewName) refs.inputNewName.placeholder = newName;
      refs.formChangeName.reset(); // Очищаем поле, если всё прошло успешно
    }
  });
}

// --- ИЗМЕНЕНИЕ EMAIL ---
if (refs.formChangeEmail) {
  refs.formChangeEmail.addEventListener('submit', async e => {
    e.preventDefault();

    const newEmail = refs.inputEmail.value.trim();

    if (!newEmail) return;

    // =========================================================
    // 1. ПРОВЕРКА: ЭТО УЖЕ ТЕКУЩИЙ EMAIL?
    // =========================================================
    if (
      auth.currentUser &&
      newEmail.toLowerCase() === auth.currentUser.email.toLowerCase()
    ) {
      iziToast.warning({
        title: 'Warning',
        message: 'You are already using this email.',
        position: 'topRight',
      });
      return; // Сразу обрываем функцию
    }

    // =========================================================
    // 2. ПРОВЕРКА НА ДЛИНУ (Дополнительная защита скриптом)
    // =========================================================
    if (newEmail.length > 50) {
      iziToast.error({
        title: 'Error',
        message: 'Email cannot exceed 50 characters.',
        position: 'topRight',
      });
      return;
    }

    // =========================================================
    // 3. ПРОВЕРКА ФОРМАТА (только англ. буквы, цифры и знаки)
    // =========================================================
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(newEmail)) {
      iziToast.error({
        title: 'Error',
        message:
          'Please use only valid English letters and numbers for your email.',
        position: 'topRight',
      });
      return;
    }

    // Блокируем кнопку, чтобы юзер не спамил кликами (опционально, но желательно)
    const submitBtn = refs.formChangeEmail.querySelector('.save_btn');
    if (submitBtn) submitBtn.disabled = true;

    // Вызываем функцию из authentication.js
    const isSuccess = await changeEmail(newEmail);

    if (isSuccess) {
      if (refs.inputEmail) refs.inputEmail.placeholder = newEmail;
      refs.formChangeEmail.reset();
    }

    if (submitBtn) submitBtn.disabled = false;
  });
}

if (refs.formChangePassword) {
  // Не забуваємо додати novalidate у HTML для цієї форми!
  refs.formChangePassword.addEventListener('submit', async e => {
    e.preventDefault();

    // ПРИБИРАЄМО .trim() ДЛЯ ПАРОЛІВ
    const currentPassord = refs.inputCurrentPassord.value;
    const newPassord = refs.inputNewPassord.value;
    const confirmPassord = refs.inputConfirmPassord.value;

    // 1. Перевірка на порожні поля (тепер без trim, тому перевіряємо просто length)
    if (!currentPassord || !newPassord || !confirmPassord) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please fill in all the fields.',
        position: 'topRight',
      });
      return;
    }

    // 2. Чи новий пароль не такий самий, як старий?
    if (currentPassord === newPassord) {
      iziToast.warning({
        title: 'Warning',
        message: 'The new password cannot be the same as your current one.',
        position: 'topRight',
      });
      return;
    }

    // 3. Регулярний вираз (твоя логіка правильна)
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

    // 4. Перевірка збігу
    if (newPassord !== confirmPassord) {
      iziToast.error({
        title: 'Error',
        message: 'The new passwords do not match!',
        position: 'topRight',
      });
      return;
    }

    // 5. Відправка
    const success = await changePassword(currentPassord, newPassord);
    if (success) {
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
        message: 'Please enter your password to confirm.',
        position: 'topRight',
      });
      return;
    }

    // =========================================================
    // ПРОВЕРКА ПАРОЛЯ (только англ. буквы и цифры, МИНИМУМ 6 СИМВОЛОВ)
    // =========================================================
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

    if (!passwordRegex.test(password)) {
      iziToast.error({
        title: 'Error',
        message:
          'Password must be at least 6 characters long and contain ONLY English letters and numbers.',
        position: 'topRight',
      });
      return;
    }

    // Если валидация пройдена, спрашиваем подтверждение
    const isConfirmed = confirm(
      'Are you sure? This action will permanently delete your account and all your data, with no possibility of recovery.'
    );

    if (!isConfirmed) return;

    // Передаем пароль в функцию удаления (где должна быть логика ре-аутентификации Firebase)
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
    const file = e.target.files[0];
    if (!file) return;

    // ==========================================
    // ЖОРСТКА ПЕРЕВІРКА НА ТИП ФАЙЛУ
    // ==========================================
    // Перевіряємо, чи починається MIME-тип файлу зі слова 'image/'
    if (!file.type.startsWith('image/')) {
      iziToast.error({
        title: 'Error',
        message: 'Please select a valid image file (JPG, PNG, WEBP, etc.).',
        position: 'topRight',
      });
      refs.inputFile.value = ''; // Очищаємо інпут
      selectedFile = null; // Скидаємо змінну
      return; // Зупиняємо подальше виконання
    }

    // Якщо все добре, зберігаємо файл
    selectedFile = file;

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
        message: 'First, select a new photo!',
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
