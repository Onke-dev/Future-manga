// Импортируем наши настроенные инструменты и функции из Firebase
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  verifyBeforeUpdateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
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

// --- ИЗМЕНЕНИЕ ИМЕНИ ---
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

// --- ИЗМЕНЕНИЕ EMAIL ---
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

// --- ИЗМЕНЕНИЕ PASSWORD ---
export async function changePassword(currentPassword, newPassword) {
  const user = auth.currentUser;
  if (!user) {
    iziToast.error({ title: 'Error', message: 'Пользователь не найден.' });
    return false;
  }

  try {
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
    iziToast.success({ title: 'Success', message: 'Пароль успешно изменен!' });
    return true;
  } catch (error) {
    if (
      error.code === 'auth/invalid-credential' ||
      error.code === 'auth/wrong-password'
    ) {
      iziToast.error({
        title: 'Error',
        message: 'Текущий пароль введен неверно!',
      });
    } else if (error.code === 'auth/weak-password') {
      iziToast.error({
        title: 'Weak Password',
        message: 'Новый пароль должен быть не менее 6 символов.',
      });
    } else {
      iziToast.error({ title: 'Error', message: error.message });
    }
    return false;
  }
}

// Вспомогательная функция для подтверждения пароля
export async function reauthenticate(currentPassword) {
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  return await reauthenticateWithCredential(user, credential);
}

export async function deleteUserAccount(currentPassword) {
  const user = auth.currentUser;

  if (!user) {
    iziToast.error({ title: 'Error', message: 'Пользователь не найден.' });
    return false;
  }

  try {
    // 1. Создаем "ключ" из текущей почты и пароля
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    // 2. Доказываем Firebase, что это реально мы
    await reauthenticateWithCredential(user, credential);

    // 3. Удаляем пользователя!
    await deleteUser(user);

    // Уведомление (хотя пользователь его вряд ли увидит долго, так как мы его перекинем)
    iziToast.info({
      title: 'Goodbye',
      message: 'Ваш аккаунт навсегда удален.',
    });
    return true;
  } catch (error) {
    if (
      error.code === 'auth/invalid-credential' ||
      error.code === 'auth/wrong-password'
    ) {
      iziToast.error({
        title: 'Error',
        message: 'Текущий пароль введен неверно!',
      });
    } else {
      iziToast.error({ title: 'Error', message: error.message });
    }
    return false;
  }
}
