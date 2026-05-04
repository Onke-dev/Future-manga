import { registerUser } from './authentication.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  registForm: document.querySelector('.form-regist'),
  email: document.querySelector('#user-email'),
  password: document.querySelector('#user-password'),
  passwordRepeat: document.querySelector('#user-password-reapeat'), // рекомендую виправити ID на 'repeat' в HTML та тут
  registerBtn: document.querySelector('.btn-regist'),
  signInBtn: document.querySelector('.js-go-login'),
};

// Хелпер для виведення помилок, щоб не дублювати код
const showError = (message, title = 'Error') => {
  iziToast.error({
    title,
    message,
    position: 'topRight',
  });
};

if (refs.registForm) {
  // Вимикаємо стандартні підказки браузера, щоб працював виключно iziToast
  refs.registForm.setAttribute('novalidate', true);

  refs.registForm.addEventListener('submit', async e => {
    e.preventDefault();

    // trim() залишаємо тільки для email. Паролі беремо "як є".
    const emailValue = refs.email.value.trim();
    const passwordValue = refs.password.value;
    const passwordRepeatValue = refs.passwordRepeat.value;

    // =========================================================
    // 1. ПЕРЕВІРКА EMAIL
    // =========================================================
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
      return showError('Please use valid English letters for your email');
    }

    // =========================================================
    // 2. ПЕРЕВІРКА ПАРОЛЯ (тільки англ. літери та цифри, мінімум 6)
    // =========================================================
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
    if (!passwordRegex.test(passwordValue)) {
      return showError(
        'Password must be at least 6 characters long and contain ONLY English letters and numbers.'
      );
    }

    // =========================================================
    // 3. ПЕРЕВІРКА ЗБІГУ ПАРОЛІВ
    // =========================================================
    if (passwordValue !== passwordRepeatValue) {
      return showError('Passwords do not match!');
    }

    // =========================================================
    // 4. ВІДПРАВКА ДО FIREBASE
    // =========================================================
    try {
      refs.registerBtn.disabled = true;

      const user = await registerUser(emailValue, passwordValue);

      if (user) {
        refs.registForm.reset();
        const baseUrl = import.meta.env.BASE_URL;
        window.location.href = `${baseUrl}index.html`;
      }
    } catch (error) {
      showError(error.message, 'Registration Error');
    } finally {
      refs.registerBtn.disabled = false;
    }
  });
}

// Логіка переходу на сторінку входу
if (refs.signInBtn) {
  refs.signInBtn.addEventListener('click', () => {
    const baseUrl = import.meta.env.BASE_URL;
    window.location.href = `${baseUrl}pages/sign-in/sign-in.html`;
  });
}
