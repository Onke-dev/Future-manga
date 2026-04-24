import {
  addNewManga,
  getMangas,
  deleteManga,
  getMangasId,
  updateManga,
  uploadImgUser,
} from './api.js';

import {
  mangaPanleTemplate,
  mangasPanleTemplate,
  mangaGenres,
  genresTemplate,
} from './renders-pages.js';
import {
  openModal,
  hideModal,
  dataElems,
  dropDownWindow,
} from './renders-pages.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/**
 * DOM Element references for Admin Panel operations
 * Посилання на елементи DOM для операцій панелі адміністратора
 */
const refs = {
  formAdd: document.querySelector('.js-add-manga'),
  formChange: document.querySelector('.js-change-manga'),
  modalChange: document.querySelector('.modalChangeManga'),
  listManga: document.querySelector('.manga-list'),
  secList: document.querySelector('.sec-list'),
};

/**
 * Initial page load: renders genres and fetches existing manga list
 * Початкове завантаження сторінки: рендеринг жанрів та отримання списку існуючої манги
 */
document.addEventListener('DOMContentLoaded', async () => {
  const markupGenres = genresTemplate(mangaGenres);
  document.querySelectorAll('.js-elems-list').forEach(element => {
    element.innerHTML = markupGenres;
  });

  dropDownWindow();
  try {
    const newManga = await getMangas();
    if (newManga && newManga.length > 0) {
      // Reverse order to show latest additions first
      // Зворотний порядок, щоб показати останні додавання першими
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

/**
 * Handles submission for adding a new manga entry
 * Обробка відправки форми для додавання нового запису манги
 */
refs.formAdd.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const infoData = dataElems(formData);

  // Validation: check for empty fields
  // Валідація: перевірка на порожні поля
  if (Object.values(infoData).some(value => value.trim() === '')) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please fill in all fields! Spaces only are not allowed.',
    });
  }

  const file1x = e.target.elements['cover_manga_1x'];
  const file2x = e.target.elements['cover_manga_2x'];

  if (!file1x.files?.length || !file2x.files?.length) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please select a cover image!',
    });
  }

  try {
    // Uploading images to the server/storage
    // Завантаження зображень на сервер/у сховище
    const coverImg1x = await uploadImgUser(file1x.files[0]);
    const coverImg2x = await uploadImgUser(file2x.files[0]);

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
    refs.formAdd.reset();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error ${error}`,
    });
  }
});

/**
 * Handles updating an existing manga entry
 * Обробка оновлення існуючого запису манги
 */
refs.formChange.addEventListener('submit', async e => {
  e.preventDefault();
  const id = e.target.dataset.id;
  const formData = new FormData(e.target);
  const infoData = dataElems(formData);

  if (Object.values(infoData).some(value => value.trim() === '')) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please fill in all fields!',
    });
  }

  // Use old covers by default unless new ones are uploaded
  // Використання старих обкладинок за замовчуванням, якщо не завантажено нові
  let coverUrl1x = refs.formChange.dataset.oldCover1x;
  let coverUrl2x = refs.formChange.dataset.oldCover2x;

  const inputElem1x = e.target.elements['cover1x_change_manga'];
  const inputElem2x = e.target.elements['cover2x_change_manga'];

  try {
    if (inputElem1x.files?.length > 0) {
      coverUrl1x = await uploadImgUser(inputElem1x.files[0]);
    }
    if (inputElem2x.files?.length > 0) {
      coverUrl2x = await uploadImgUser(inputElem2x.files[0]);
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
    hideModal();

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

/**
 * Event delegation for list actions: Delete, Change, or Show Details
 * Делегування подій для дій у списку: Видалити, Змінити або Показати деталі
 */
refs.listManga.addEventListener('click', async e => {
  try {
    if (e.target.classList.contains('delete')) {
      // Deleting manga entry
      // Видалення запису манги
      await deleteManga(e.target.dataset.id);
      e.target.closest('.manga-itemPanel').remove();
      iziToast.success({
        title: 'OK',
        message: 'Successfully delete manga!',
      });
    } else if (e.target.classList.contains('change')) {
      // Filling update form with existing data
      // Заповнення форми оновлення існуючими даними
      const id = e.target.dataset.id;
      const updateMangaData = await getMangasId(id);

      // Pre-filling form fields
      // Попереднє заповнення полів форми
      refs.formChange.dataset.oldCover1x =
        updateMangaData.cover1x || updateMangaData.cover;
      document.querySelector('.js-cover1x-img').src =
        updateMangaData.cover1x || updateMangaData.cover;

      refs.formChange.dataset.oldCover2x =
        updateMangaData.cover2x || updateMangaData.cover;
      document.querySelector('.js-cover2x-img').src =
        updateMangaData.cover2x || updateMangaData.cover;

      refs.formChange.elements['cover_alt'].value = updateMangaData.alt;
      refs.formChange.elements['name-manga'].value = updateMangaData.title;
      refs.formChange.elements['status-manga'].value = updateMangaData.status;
      refs.formChange.elements['name-author'].value = updateMangaData.author;
      checkBoxes(updateMangaData);
      refs.formChange.elements['manga-summary'].value = updateMangaData.summary;

      openModal();
      refs.formChange.dataset.id = id;
    } else if (e.target.classList.contains('showMore')) {
      // Navigate to detailed view
      // Перехід до детального перегляду
      const id = e.target.closest('.showMore').dataset.id;
      window.location.href = `../manga-deteils/manga-template.html?id=${id}`;
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong: ${error}`,
    });
  }
});

/**
 * Closes modal on backdrop click
 * Закриття модального вікна при кліку на фон
 */
refs.modalChange.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    hideModal();
  }
});

/**
 * Syncs checkboxes with manga genres data
 * Синхронізація чекбоксів з даними про жанри манги
 */
function checkBoxes(mangaData) {
  const allCheckboxes = document.querySelectorAll('input[name="manga_genres"]');
  allCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  if (mangaData.genres && Array.isArray(mangaData.genres)) {
    mangaData.genres.forEach(genre => {
      const targetElem = refs.formChange.querySelector(
        `input[name="manga_genres"][value="${genre}"]`
      );
      if (targetElem) {
        targetElem.checked = true;
      }
    });
  }
}
