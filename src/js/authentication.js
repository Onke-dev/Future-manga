// Импортируем наши настроенные инструменты и функции из Firebase
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from './firebase-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// --- РЕГИСТРАЦИЯ ---
export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    iziToast.success({
      title: 'Success',
      message: 'Регистрация прошла успешно!',
    });
    return user;
  } catch (error) {
    // Firebase сам понимает, если пароль слабый или email уже занят
    iziToast.error({ title: 'Error', message: error.message });
  }
}

// --- ВХОД ---
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    iziToast.success({ title: 'Welcome', message: 'Вы успешно вошли!' });
    // Например, закрыть модалку или перекинуть в My Account
    return user;
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Неверный email или пароль.' });
  }
}

// --- ВЫХОД ИЗ АККАУНТА ---
export async function logoutUser() {
  try {
    await signOut(auth);
    iziToast.info({
      title: 'Goodbye',
      message: 'Вы успешно вышли из аккаунта.',
    });
    return true; // Возвращаем true, чтобы сказать "Всё прошло отлично"
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Ошибка при выходе: ' + error.message,
    });
    return false;
  }
}
