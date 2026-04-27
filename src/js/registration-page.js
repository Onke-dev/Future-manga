import { registerUser } from './authentication.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  registForm: document.querySelector('.form-regist'),
  email: document.querySelector('#user-email'),
  password: document.querySelector('#user-password'),
  passwordRepeat: document.querySelector('#user-password-reapeat'),
  registerBtn: document.querySelector('.btn-regist'),
  signInBtn: document.querySelector('.js-go-login'),
};

if (refs.registForm) {
  refs.registForm.addEventListener('submit', async e => {
    e.preventDefault();

    // Считываем значения ПОСЛЕ клика
    const emailValue = refs.email.value.trim();
    const passwordValue = refs.password.value.trim();
    const passwordRepeatValue = refs.passwordRepeat.value.trim();

    // =========================================================
    // 1. ПРОВЕРКА EMAIL (только англ. буквы, цифры и знаки почты)
    // =========================================================
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
      iziToast.error({
        title: 'Error',
        message: 'Please use only English letters and numbers for your email.',
        position: 'topRight', // Добавил позицию, чтобы уведомления красиво выезжали сверху справа
      });
      return;
    }

    // =========================================================
    // 2. ПРОВЕРКА ПАРОЛЯ (только англ. буквы и цифры, МИНИМУМ 6 СИМВОЛОВ)
    // =========================================================
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

    if (!passwordRegex.test(passwordValue)) {
      iziToast.error({
        title: 'Error',
        message:
          'Password must be at least 6 characters long and contain ONLY English letters and numbers.',
        position: 'topRight',
      });
      return;
    }

    // =========================================================
    // 3. ПРОВЕРКА СОВПАДЕНИЯ ПАРОЛЕЙ
    // =========================================================
    if (passwordValue !== passwordRepeatValue) {
      iziToast.error({
        title: 'Error',
        message: 'Passwords do not match!',
        position: 'topRight',
      });
      return;
    }

    // =========================================================
    // 4. ОТПРАВКА В FIREBASE
    // =========================================================
    try {
      // Блокируем кнопку, чтобы юзер не накликал кучу регистраций
      refs.registerBtn.disabled = true;

      const user = await registerUser(emailValue, passwordValue);

      if (user) {
        refs.registForm.reset();
        const baseUrl = import.meta.env.BASE_URL;
        window.location.href = `${baseUrl}index.html`;
      }
    } catch (error) {
      iziToast.error({
        title: 'Registration Error',
        message: error.message,
        position: 'topRight',
      });
    } finally {
      // Разблокируем кнопку, если что-то пошло не так
      refs.registerBtn.disabled = false;
    }
  });
}

// Логика перехода на страницу входа
if (refs.signInBtn) {
  refs.signInBtn.addEventListener('click', () => {
    const baseUrl = import.meta.env.BASE_URL;
    window.location.href = `${baseUrl}pages/sign-in/sign-in.html`;
  });
}
