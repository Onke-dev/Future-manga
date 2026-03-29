import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMangas } from './api.js';
import { mangasHomeTemplate } from './renders-pages.js';

const ulList = document.querySelector('.js-manga-render');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const api = await getMangas();
    const markup = mangasHomeTemplate(api);
    ulList.innerHTML = markup;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error ${error}`,
    });
  }
});
