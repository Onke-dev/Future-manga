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
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from './firebase-api.js';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// --- РЕГИСТРАЦИЯ ---
export async function registerUser(email, password) {
  try {
    // 1. Создаем пользователя в Firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const defaultName = email.split('@')[0];

    await updateProfile(user, { displayName: defaultName });

    // 2. Пытаемся записать пользователя в json-server
    try {
      await axios.post('http://localhost:3000/users', {
        id: user.uid,
        email: user.email,
        name: defaultName,
        role: 'reader',
        photo: '',
      });

      iziToast.success({
        title: 'Success',
        message: 'Registration was successful!',
      });
      return user;
    } catch (dbError) {
      // 3. ROLLBACK: БД лежит. Удаляем созданный аккаунт из Firebase!
      await user.delete();
      throw new Error(
        'Database server is unavailable. Registration cancelled.'
      );
    }
  } catch (error) {
    // КРИТИЧЕСКИ ВАЖНО: прокидываем ошибку дальше, чтобы её поймала форма!
    throw error;
  }
}

// --- ВХОД ---
// Файл: authentication.js
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    try {
      // Запит до локальної БД
      await axios.get(`http://localhost:3000/users/${user.uid}`);
      return user;
    } catch (dbError) {
      // Сервер БД лежить. Кидаємо кастомну помилку!
      await signOut(auth);
      throw new Error('Database server is unavailable. Login cancelled.');
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message || 'Incorrect email address or password.',
      position: 'topRight',
    });
  }
}

// --- ВЫХОД ИЗ АККАУНТА ---
export async function logoutUser() {
  try {
    await signOut(auth);
    iziToast.info({
      title: 'Goodbye',
      message: 'You have successfully logged out of your account.',
    });
    return true; // Возвращаем true, чтобы сказать "Всё прошло отлично"
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Error on exit: ' + error.message,
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
      iziToast.success({
        title: 'Success',
        message: 'Your name has been successfully updated!',
      });
      return true;
    } catch (error) {
      iziToast.error({ title: 'Error', message: 'Error: ' + error.message });
      return false;
    }
  } else {
    iziToast.error({
      title: 'Error',
      message: 'The user cannot be found. Please log in again.',
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
      message: 'The user could not be found. Please log in again.',
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
        'A confirmation link has been sent to your new email address. Please click on it to activate the changes!',
      timeout: 6000, // Пусть повисит подольше, чтобы успел прочитать
    });
    return true;
  } catch (error) {
    // Если Firebase попросит перелогиниться (auth/requires-recent-login)
    if (error.code === 'auth/requires-recent-login') {
      iziToast.warning({
        title: 'Security',
        message:
          'For security reasons, please click EXIT, log in again and try again.',
      });
    } else {
      iziToast.error({ title: 'Error', message: 'Error: ' + error.message });
    }
    return false;
  }
}

// --- ИЗМЕНЕНИЕ PASSWORD ---
export async function changePassword(currentPassword, newPassword) {
  const user = auth.currentUser;
  if (!user) {
    iziToast.error({ title: 'Error', message: 'User not found.' });
    return false;
  }

  try {
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
    iziToast.success({
      title: 'Success',
      message: 'Your password has been successfully changed!',
    });
    return true;
  } catch (error) {
    if (
      error.code === 'auth/invalid-credential' ||
      error.code === 'auth/wrong-password'
    ) {
      iziToast.error({
        title: 'Error',
        message: 'The current password has been entered incorrectly!',
      });
    } else if (error.code === 'auth/weak-password') {
      iziToast.error({
        title: 'Weak Password',
        message: 'Your new password must be at least 6 characters long.',
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

// ---DELETE ACCOUNT ---
export async function deleteUserAccount(currentPassword) {
  const user = auth.currentUser;

  if (!user) {
    iziToast.error({ title: 'Error', message: 'User not found.' });
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
      message: 'Your account has been permanently deleted.',
    });
    return true;
  } catch (error) {
    if (
      error.code === 'auth/invalid-credential' ||
      error.code === 'auth/wrong-password'
    ) {
      iziToast.error({
        title: 'Error',
        message: 'The current password has been entered incorrectly!',
      });
    } else {
      iziToast.error({ title: 'Error', message: error.message });
    }
    return false;
  }
}

// --- ИЗМЕНЕНИЕ АВАТАРКИ ---
export async function uploadAvatar(file) {
  const user = auth.currentUser;
  if (!user) return false;

  // 1. Формуємо УНІКАЛЬНЕ ім'я файлу (додаємо timestamp), щоб не затерти стару картинку завчасно!
  const uniqueFileName = `${user.uid}_${Date.now()}`;
  const fileRef = ref(storage, `avatars/${uniqueFileName}`);

  try {
    // 2. Завантажуємо НОВУ картинку у Firebase Storage
    await uploadBytes(fileRef, file);
    const newPhotoURL = await getDownloadURL(fileRef);

    try {
      // 3. Стукаємо у локальну базу db.json
      await axios.patch(`http://localhost:3000/users/${user.uid}`, {
        photo: newPhotoURL,
      });
    } catch (dbError) {
      // 4. ROLLBACK (Відкат): База вимкнена!
      // Видаляємо щойно завантажену нову картинку з Firebase Storage, бо БД лежить
      await deleteObject(fileRef);
      throw new Error(
        'Database server is unavailable. Avatar update cancelled.'
      );
    }

    // 5. ТІЛЬКИ ЯКЩО БАЗА ОНОВИЛАСЯ – оновлюємо профіль у Firebase Auth
    await updateProfile(user, { photoURL: newPhotoURL });

    iziToast.success({
      title: 'Success',
      message: 'Photo updated successfully!',
    });

    return newPhotoURL;
  } catch (error) {
    console.error('Photo upload error:', error);
    iziToast.error({
      title: 'Error',
      message: error.message || 'Failed to update photo.',
    });
    return false;
  }
}
