import { addNewManga } from './api.js';
import { getMangas } from './api.js';
import { deleteManga } from './api.js';
import { mangaPanleTemplate } from './renders-pages.js';
import { mangasPanleTemplate } from './renders-pages.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.js-add-manga'),
  listManga: document.querySelector('.manga-list'),
  // deleteBtn: document.querySelector('.delete'),
};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const newManga = await getMangas();
    if (newManga && newManga.length > 0) {
      const reverseManga = newManga.reverse();
      const markup = mangasPanleTemplate(reverseManga);
      refs.listManga.innerHTML = markup;
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error ${error}`,
    });
  }
});

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const newMangaData = {
    cover: formData.get('cover_manga'),
    alt: formData.get('cover_alt'),
    title: formData.get('name-manga'),
    status: formData.get('status-manga'),
    author: formData.get('name-author'),
    genres: formData.get('genres-manga'),
    summary: formData.get('manga-summary'),
  };

  try {
    const newManga = await addNewManga(newMangaData);
    const markup = mangaPanleTemplate(newManga);
    refs.listManga.insertAdjacentHTML('afterbegin', markup);
    iziToast.success({
      title: 'OK',
      message: 'Successfully add manga!',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error ${error}`,
    });
  }

  refs.form.reset();
});

refs.listManga.addEventListener('click', async e => {
  try {
    if (e.target.classList.contains('delete')) {
      await deleteManga(e.target.dataset.id);
      const init = e.target.closest('.manga-itemPanel');
      init.remove();
      iziToast.success({
        title: 'OK',
        message: 'Successfully delete manga!',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error ${error} while removing a manga from the manga database`,
    });
  }
});
