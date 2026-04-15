import { registerUser } from './authentication.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const refs = {
  registForm: document.querySelector('.form-regist'),
  email: document.querySelector('#user-email'),
  password: document.querySelector('#user-password'), // Исправил passord на password
  passwordRepeat: document.querySelector('#user-password-reapeat'),
  registerBtn: document.querySelector('.btn-regist'),
  signInBtn: document.querySelector('.js-go-login'), // Исправил singIn на signIn
};

// Проверку длины пароля убрали отсюда и перенесли вниз!

if (refs.registForm) {
  refs.registForm.addEventListener('submit', async e => {
    e.preventDefault();

    // Считываем значения ПОСЛЕ клика
    const emailValue = refs.email.value.trim();
    const passwordValue = refs.password.value.trim();
    const passwordRepeatValue = refs.passwordRepeat.value.trim();

    // 1. ПРАВИЛЬНОЕ МЕСТО ДЛЯ ПРОВЕРКИ ДЛИНЫ:
    if (passwordValue.length < 6) {
      iziToast.warning({
        title: 'Warning',
        message: 'Пароль должен быть минимум 6 символов!',
      });
      return; // Теперь return внутри функции, ошибки не будет!
    }

    // 2. ПРОВЕРКА СОВПАДЕНИЯ ПАРОЛЕЙ
    if (passwordValue !== passwordRepeatValue) {
      iziToast.error({
        title: 'Error',
        message: 'Passwords do not match!',
      });
      return;
    }

    // 3. ОТПРАВКА В FIREBASE
    const user = await registerUser(emailValue, passwordValue);

    if (user) {
      refs.registForm.reset();
      const baseUrl = import.meta.env.BASE_URL;
      // Оставил твой путь к файлу как есть (sing-in.html)
      window.location.href = `${baseUrl}index.html`;
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
