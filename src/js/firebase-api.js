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
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Firebase service configuration
// Конфігурація сервісів Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAFoelggij4rkzoeKq5twqklpQ3dd4Ycmw',
  authDomain: 'future-manga.firebaseapp.com',
  projectId: 'future-manga',
  storageBucket: 'future-manga.firebasestorage.app',
  messagingSenderId: '1088108462273',
  appId: '1:1088108462273:web:55c30b5dccc18d0795d440',
  measurementId: 'G-YZGBY0PE58',
};

// Application and services initialization
// Ініціалізація додатка та сервісів
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const storage = getStorage(app);

// Public API for authentication and storage operations
// Публічний API для операцій автентифікації та сховища
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
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
};

/**
 * Reauthentication with current credentials for security-sensitive tasks
 * Повторна автентифікація з поточними даними для безпечних операцій
 */
async function reauthenticate(currentPassword) {
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  return await reauthenticateWithCredential(user, credential);
}

/**
 * Email update process with verification
 * Процес оновлення Email із підтвердженням
 */
export async function changeEmail(newEmail) {
  const user = auth.currentUser;
  try {
    await verifyBeforeUpdateEmail(user, newEmail);
    iziToast.success({
      title: 'Success',
      message: 'Email updated successfully!',
    });
    return true;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to update email: ' + error.message,
    });
    return false;
  }
}

/**
 * Password update with mandatory reauthentication
 * Оновлення пароля з обов'язковою повторною автентифікацією
 */
export async function changePassword(currentPassword, newPassword) {
  const user = auth.currentUser;
  try {
    await reauthenticate(currentPassword);
    await updatePassword(user, newPassword);
    iziToast.success({
      title: 'Success',
      message: 'Password changed successfully!',
    });
    return true;
  } catch (error) {
    // Check for specific authentication errors
    // Перевірка специфічних помилок автентифікації
    if (
      error.code === 'auth/invalid-credential' ||
      error.code === 'auth/wrong-password'
    ) {
      iziToast.error({
        title: 'Error',
        message: 'The current password you entered is incorrect.',
      });
    } else {
      iziToast.error({ title: 'Error', message: error.message });
    }
    return false;
  }
}

/**
 * Permanent deletion of user profile and data
 * Безповоротне видалення профілю та даних користувача
 */
export async function deleteUserAccount(currentPassword) {
  const user = auth.currentUser;
  try {
    await reauthenticate(currentPassword);
    await deleteUser(user);
    iziToast.info({
      title: 'Goodbye',
      message: 'Your account has been permanently deleted.',
    });
    return true;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to delete account: ' + error.message,
    });
    return false;
  }
}
