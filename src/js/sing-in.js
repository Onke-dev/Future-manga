// Подставляй свой правильный путь до файла authentication.js
import { loginUser } from './authentication.js';

const refs = {
  loginForm: document.querySelector('.form-login'),
  email: document.querySelector('#user-email'),
  password: document.querySelector('#user-password'),
  rememberCheckbox: document.querySelector('#remember'), // Тот самый кастомный чекбокс
  btnGoRegister: document.querySelector('.js-go-register'), // Кнопка перехода на регистрацию
};

// --- ЛОГИКА ВХОДА ---
if (refs.loginForm) {
  refs.loginForm.addEventListener('submit', async e => {
    e.preventDefault();

    const emailValue = refs.email.value.trim();
    const passwordValue = refs.password.value.trim();

    // Блокируем кнопку, чтобы юзер не кликал 100 раз подряд
    const submitBtn = refs.loginForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Loading...';

    // Вызываем функцию входа из твоего сервиса
    const user = await loginUser(emailValue, passwordValue);

    if (user) {
      // УСПЕХ: Очищаем форму
      refs.loginForm.reset();

      // Перекидываем на главную через секунду (чтобы юзер успел прочитать тост "Welcome!")
      setTimeout(() => {
        const baseUrl = import.meta.env.BASE_URL;
        window.location.href = `${baseUrl}index.html`;
      }, 1000);
    } else {
      // ОШИБКА: Разблокируем кнопку, чтобы юзер мог попробовать ввести пароль еще раз
      submitBtn.disabled = false;
      submitBtn.textContent = 'Sign in';
    }
  });
}

// --- ЛОГИКА КНОПКИ "Register" ---
// Если у человека еще нет аккаунта и он хочет перейти на страницу регистрации
if (refs.btnGoRegister) {
  refs.btnGoRegister.addEventListener('click', () => {
    const baseUrl = import.meta.env.BASE_URL;
    // Укажи тут свой точный путь до страницы регистрации
    window.location.href = `${baseUrl}pages/registration/registration.html`;
  });
}
