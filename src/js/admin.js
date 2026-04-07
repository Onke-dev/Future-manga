import { addNewManga } from './api.js';
import { getMangas } from './api.js';
import { deleteManga } from './api.js';
import { getMangasId } from './api.js';
import { updateManga } from './api.js';
import { uploadImgUser } from './api.js';
import { mangaPanleTemplate } from './renders-pages.js';
import { mangasPanleTemplate } from './renders-pages.js';
import { mangaGenres, genresTemplate } from './renders-pages.js';
import { openModal } from './renders-pages.js';
import { hideModal } from './renders-pages.js';
import { dataElems } from './renders-pages.js';
import { dropDownWindow } from './renders-pages.js';
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
  const markupGenres = genresTemplate(mangaGenres);
  document.querySelectorAll('.js-elems-list').forEach(element => {
    element.innerHTML = markupGenres;
  });

  dropDownWindow();
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

  const infoData = dataElems(formData);

  if (Object.values(infoData).some(value => value.trim() === '')) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please fill in all fields! Spaces only are not allowed.',
    });
  }

  const file1x = e.target.elements['cover_manga_1x'];
  const file2x = e.target.elements['cover_manga_2x'];

  if (
    !file1x.files ||
    file1x.files.length === 0 ||
    !file2x.files ||
    file2x.files.length === 0
  ) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please select a cover image!',
    });
  }

  const uploadImg1x = file1x.files[0];
  const uploadImg2x = file2x.files[0];
  try {
    const coverImg1x = await uploadImgUser(uploadImg1x);
    const coverImg2x = await uploadImgUser(uploadImg2x);

    const checkGenres = Array.from(
      e.target.querySelectorAll('input[type="checkbox"]:checked')
    ).map(checkbox => checkbox.value);
    const newMangaData = {
      cover1x: coverImg1x,
      cover2x: coverImg2x,
      status: formData.get('status-manga'),
      genres: checkGenres,

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

  const infoData = dataElems(formData);

  if (Object.values(infoData).some(value => value.trim() === '')) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please fill in all fields! Spaces only are not allowed.',
    });
  }

  let coverUrl1x = refs.formChange.dataset.oldCover1x;
  let coverUrl2x = refs.formChange.dataset.oldCover2x;

  const inputElem1x = e.target.elements['cover1x_change_manga'];
  const inputElem2x = e.target.elements['cover2x_change_manga'];

  try {
    if (inputElem1x.files && inputElem1x.files.length > 0) {
      const uploadImg1x = inputElem1x.files[0];
      coverUrl1x = await uploadImgUser(uploadImg1x);
    }

    if (inputElem2x.files && inputElem2x.files.length > 0) {
      const uploadImg2x = inputElem2x.files[0];
      coverUrl2x = await uploadImgUser(uploadImg2x);
    }
  } catch (error) {
    return iziToast.error({
      title: 'Error',
      message: 'Failed to upload new image',
    });
  }

  const checkGenres = Array.from(
    e.target.querySelectorAll('input[type="checkbox"]:checked')
  ).map(checkbox => checkbox.value);

  const updatedManga = {
    cover1x: coverUrl1x,
    cover2x: coverUrl2x,
    status: formData.get('status-manga'),
    genres: checkGenres,
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

      refs.formChange.elements['cover1x_change_manga'].value = '';
      refs.formChange.dataset.oldCover1x =
        updateManga.cover1x || updateManga.cover;
      document.querySelector('.js-cover1x-img').src =
        updateManga.cover1x || updateManga.cover;

      refs.formChange.elements['cover2x_change_manga'].value = '';
      refs.formChange.dataset.oldCover2x =
        updateManga.cover2x || updateManga.cover;
      document.querySelector('.js-cover2x-img').src =
        updateManga.cover2x || updateManga.cover;

      refs.formChange.elements['cover_alt'].value = updateManga.alt;
      refs.formChange.elements['name-manga'].value = updateManga.title;
      refs.formChange.elements['status-manga'].value = updateManga.status;
      refs.formChange.elements['name-author'].value = updateManga.author;
      checkBoxes();
      refs.formChange.elements['manga-summary'].value = updateManga.summary;

      openModal();
      refs.formChange.dataset.id = id;
    } else if (e.target.classList.contains('showMore')) {
      const btn = e.target.closest('.showMore');
      const id = btn.dataset.id;
      window.location.href = `manga-template.html?id=${id}`;
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
    hideModal();
  }
});

function checkBoxes() {
  const allCheckboxes = document.querySelectorAll('input[name="manga_genres"]');
  allCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  if (updateManga.genres && Array.isArray(updateManga.genres)) {
    updateManga.forEach(genre => {
      const targetElem = refs.formChange.querySelector(
        `input[name="manga_genres"][value="${genre}"]`
      );
      if (targetElem) {
        targetElem.checked = true;
      }
    });
  }
}
