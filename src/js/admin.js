import { addNewManga } from './api.js';
import { getMangas } from './api.js';
import { deleteManga } from './api.js';
import { getMangasId } from './api.js';
import { mangaPanleTemplate } from './renders-pages.js';
import { mangasPanleTemplate } from './renders-pages.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formAdd: document.querySelector('.js-add-manga'),
  formChange: document.querySelector('.js-change-manga'),
  modalChange: document.querySelector('.modalChangeManga'),
  listManga: document.querySelector('.manga-list'),
  secList: document.querySelector('.sec-list'),
};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const newManga = await getMangas();
    if (newManga && newManga.length > 0) {
      const reverseManga = newManga.reverse();
      const markup = mangasPanleTemplate(reverseManga);
      refs.listManga.innerHTML = markup;
    } else {
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error ${error}`,
    });
  }
});

refs.formAdd.addEventListener('submit', async e => {
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
    } else if (e.target.classList.contains('change')) {
      const id = e.target.dataset.id;

      const updateManga = await getMangasId(id);
      console.log(updateManga);

      refs.formChange.elements['cover_manga'].value = updateManga.cover;
      refs.formChange.elements['cover_alt'].value = updateManga.alt;
      refs.formChange.elements['name-manga'].value = updateManga.title;
      refs.formChange.elements['status-manga'].value = updateManga.status;
      refs.formChange.elements['name-author'].value = updateManga.author;
      refs.formChange.elements['genres-manga'].value = updateManga.genres;
      refs.formChange.elements['manga-summary'].value = updateManga.summary;

      refs.modalChange.classList.add('is-open');
      document.body.classList.add('no-scroll');
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong: ${error}`,
    });
  }
});

refs.modalChange.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    refs.modalChange.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
});
