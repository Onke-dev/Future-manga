// Импортируем наши настроенные инструменты и функции из Firebase
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  verifyBeforeUpdateEmail,
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

    const defaultName = email.split('@')[0];

    await updateProfile(user, {
      displayName: defaultName,
      // photoURL: 'тут_можно_ссылку_на_стандартную_аватарку.png'
    });

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

// =====================================
// 1. ИЗМЕНЕНИЕ ИМЕНИ
// =====================================
export async function changeName(newName) {
  // Ждем newName
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, { displayName: newName }); // Передаем newName
      iziToast.success({ title: 'Success', message: 'Имя успешно обновлено!' });
      return true;
    } catch (error) {
      iziToast.error({ title: 'Error', message: 'Ошибка: ' + error.message });
      return false;
    }
  } else {
    iziToast.error({
      title: 'Error',
      message: 'Пользователь не найден. Перезайдите в аккаунт.',
    });
    return false;
  }
}

// =====================================
// 2. ИЗМЕНЕНИЕ EMAIL
// =====================================
export async function changeEmail(newEmail) {
  const user = auth.currentUser;

  if (!user) {
    iziToast.error({
      title: 'Error',
      message: 'Пользователь не найден. Перезайдите в аккаунт.',
    });
    return false;
  }

  try {
    // Используем новый безопасный метод!
    await verifyBeforeUpdateEmail(user, newEmail);

    // Предупреждаем пользователя, что нужно проверить почту
    iziToast.success({
      title: 'Check your Inbox!',
      message:
        'Ссылка для подтверждения отправлена на новый email. Перейдите по ней, чтобы изменения вступили в силу!',
      timeout: 6000, // Пусть повисит подольше, чтобы успел прочитать
    });
    return true;
  } catch (error) {
    // Если Firebase попросит перелогиниться (auth/requires-recent-login)
    if (error.code === 'auth/requires-recent-login') {
      iziToast.warning({
        title: 'Security',
        message:
          'Ради безопасности, пожалуйста, нажмите EXIT, войдите заново и повторите попытку.',
      });
    } else {
      iziToast.error({ title: 'Error', message: 'Ошибка: ' + error.message });
    }
    return false;
  }
}
