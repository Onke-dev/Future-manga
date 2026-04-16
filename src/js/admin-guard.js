import { auth, onAuthStateChanged } from './firebase-api.js';
import {
  hideLoader,
  showLoader,
  hideNavigation,
  showNavigation,
} from './renders-pages.js';
const ADMIN_EMAIL = 'angertina777@ukr.net';

const mainConteiner = document.querySelector('.js-main');

onAuthStateChanged(auth, user => {
  hideNavigation();
  const baseUrl = import.meta.env.BASE_URL;

  if (user && user.email === ADMIN_EMAIL) {
    hideLoader();
    if (mainConteiner) {
      showNavigation();
      mainConteiner.style.display = 'block';
    }
  } else {
    (window, location.replace(`${baseUrl}index.html`));
  }
});
