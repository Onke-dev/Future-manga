// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  verifyBeforeUpdateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAFoelggij4rkzoeKq5twqklpQ3dd4Ycmw',
  authDomain: 'future-manga.firebaseapp.com',
  projectId: 'future-manga',
  storageBucket: 'future-manga.firebasestorage.app',
  messagingSenderId: '1088108462273',
  appId: '1:1088108462273:web:55c30b5dccc18d0795d440',
  measurementId: 'G-YZGBY0PE58',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Экспортируем инструмент auth, чтобы другие файлы могли логинить юзеров
export const auth = getAuth(app);

// Экспортируем сами функции, чтобы вызывать их при клике на кнопки
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  verifyBeforeUpdateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
};

async function confirmationPassword(currentPassword) {
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  return await reauthenticateWithCredential(user, credential);
}
// ==========================================
// НАСТРОЙКИ АККАУНТА (USER SETTINGS)
// ==========================================

// Внутренняя функция-помощник (без export)
async function reauthenticate(currentPassword) {
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  return await reauthenticateWithCredential(user, credential);
}

// 2. Изменение почты
export async function changeEmail(newEmail) {
  const user = auth.currentUser;
  try {
    await updateEmail(user, newEmail);
    iziToast.success({ title: 'Success', message: 'Email успешно изменен!' });
    return true;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Не удалось сменить email. ' + error.message,
    });
    return false;
  }
}

// 3. Изменение пароля
export async function changePassword(currentPassword, newPassword) {
  const user = auth.currentUser;
  try {
    await reauthenticate(currentPassword);
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
    } else {
      iziToast.error({ title: 'Error', message: error.message });
    }
    return false;
  }
}

// 4. Удаление аккаунта
export async function deleteUserAccount(currentPassword) {
  const user = auth.currentUser;
  try {
    await reauthenticate(currentPassword);
    await deleteUser(user);
    iziToast.info({
      title: 'Goodbye',
      message: 'Ваш аккаунт навсегда удален.',
    });
    return true;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Не удалось удалить: ' + error.message,
    });
    return false;
  }
}
