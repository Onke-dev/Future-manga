import { addNewManga } from './api.js';
import { getMangas } from './api.js';
import { deleteManga } from './api.js';
import { getMangasId } from './api.js';
import { updateManga } from './api.js';
import { uploadImgUser } from './api.js';

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

  const infoData = {
    alt: formData.get('cover_alt').replace(/\s+/g, ' ').trim(),
    title: formData.get('name-manga').replace(/\s+/g, ' ').trim(),
    author: formData.get('name-author').replace(/\s+/g, ' ').trim(),
    summary: formData.get('manga-summary').replace(/\s+/g, ' ').trim(),
  };
  if (Object.values(infoData).some(value => value.trim() === '')) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please fill in all fields! Spaces only are not allowed.',
    });
  }

  // 2. Валідація картинки
  const fileInputElement = e.target.elements['cover_manga']; // Достукаємося безпосередньо до HTML-елемента інпуту форми

  if (!fileInputElement.files || fileInputElement.files.length === 0) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please select a cover image!',
    });
  }

  // Якщо файл є, беремо перший (він же єдиний, бо accept="image/*")
  const uploadImg = fileInputElement.files[0];

  try {
    const cover1x = await uploadImgUser(uploadImg);

    const newMangaData = {
      cover: cover1x, // Наш лінк з ImgBB
      status: formData.get('status-manga'),
      genres: formData.get('genres-manga'),

      alt: infoData.alt,
      title: infoData.title,
      author: infoData.author,
      summary: infoData.summary,
    };

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

  refs.formAdd.reset();
});

refs.formChange.addEventListener('submit', async e => {
  e.preventDefault();
  const id = e.target.dataset.id;
  const formData = new FormData(e.target);

  const infoData = {
    alt: formData.get('cover_alt').replace(/\s+/g, ' ').trim(),
    title: formData.get('name-manga').replace(/\s+/g, ' ').trim(),
    author: formData.get('name-author').replace(/\s+/g, ' ').trim(),
    summary: formData.get('manga-summary').replace(/\s+/g, ' ').trim(),
  };
  if (Object.values(infoData).some(value => value.trim() === '')) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please fill in all fields! Spaces only are not allowed.',
    });
  }

  const inputElem = e.target.elements['cover_manga'];
  let coverUrl = refs.formChange.dataset.oldCover;

  if (inputElem.files && inputElem.files.length > 0) {
    const uploadImg = inputElem.files[0];
    try {
      coverUrl = await uploadImgUser(uploadImg);
    } catch (error) {
      return iziToast.error({
        title: 'Error',
        message: 'Failed to upload new image',
      });
    }
  }

  const updatedManga = {
    cover: coverUrl,
    status: formData.get('status-manga'),
    genres: formData.get('genres-manga'),
    alt: infoData.alt,
    title: infoData.title,
    author: infoData.author,
    summary: infoData.summary,
  };


  try {
    const res = await updateManga(id, updatedManga);
    const updatedMarkup = mangaPanleTemplate(res);
    const oldCard = document
      .querySelector(`[data-id="${id}"]`)
      .closest('.manga-itemPanel');
    oldCard.outerHTML = updatedMarkup;

    refs.modalChange.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    iziToast.success({
      title: 'OK',
      message: 'Successfully update info about manga!',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong: ${error}`,
    });
  }
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

      refs.formChange.elements['cover_manga'].value = '';
      refs.formChange.dataset.oldCover = updateManga.cover;

      refs.formChange.elements['cover_alt'].value = updateManga.alt;
      refs.formChange.elements['name-manga'].value = updateManga.title;
      refs.formChange.elements['status-manga'].value = updateManga.status;
      refs.formChange.elements['name-author'].value = updateManga.author;
      refs.formChange.elements['genres-manga'].value = updateManga.genres;
      refs.formChange.elements['manga-summary'].value = updateManga.summary;

      refs.modalChange.classList.add('is-open');
      document.body.classList.add('no-scroll');
      refs.formChange.dataset.id = id;
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
