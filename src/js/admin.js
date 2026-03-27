import { addNewManga } from './api.js';
import { getMangas } from './api.js';
import { mangaPanleTemplate } from './renders-pages.js';
import { mangasPanleTemplate } from './renders-pages.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.js-add-manga'),
  listManga: document.querySelector('.manga-list'),
};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const newManga = await getMangas();
    if (newManga && newManga.length > 0) {
      const markup = mangasPanleTemplate(newManga);
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

  const mangaData = {
    cover: formData.get('cover_manga'),
    alt: formData.get('cover_alt'),
    title: formData.get('name-manga'),
    status: formData.get('status-manga'),
    author: formData.get('name-author'),
    genres: formData.get('genres-manga'),
    summary: formData.get('manga-summary'),
  };

  try {
    const newManga = await addNewManga(mangaData);
    const markup = mangaPanleTemplate(newManga);
    refs.listManga.insertAdjacentHTML("beforebegin", markup);
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

async function listManga() {
  const mangaData = {
    cover: formData.get('cover_manga'),
    alt: formData.get('cover_alt'),
    title: formData.get('name-manga'),
  };
  const newManga = await getMangas(mangaData);
  const markup = mangaPanleTemplate(newManga);
  refs.listManga.innerHTML = markup;
}
