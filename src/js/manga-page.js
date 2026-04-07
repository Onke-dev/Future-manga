import { getMangasId } from './api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', async () => {
  const query = window.location.search;
  const urlParam = new URLSearchParams(query);
  const mangaId = urlParam.get('id');

  if (!mangaId) {
    iziToast.error({
      title: 'Error',
      message: `ID манґи не знайдено в URL!`,
    });
    return;
  }

  try {
    const mangaData = await getMangasId(mangaId);

    const coverElem = document.querySelector('.js-cover');
    coverElem.src = mangaData.cover2x || mangaData.cover1x;
    coverElem.alt = mangaData.alt;

    document.querySelector('.js-title').textContent = mangaData.title;
    document.querySelector('.js-status').textContent = mangaData.status;
    document.querySelector('.js-author').textContent = mangaData.author;
    document.querySelector('.js-summary-container').textContent =
      mangaData.summary;

    const genreElems = document.querySelector('.genres-manga');
    const dt = `<dt class="title" data-key="title_genre">Genres:</dt>`;
    if (Array.isArray(mangaData.genres)) {
      const dd = mangaData.genres
        .map(genre => {
          return `<dd class="genre">${genre}</dd>`;
        })
        .join('');
      genreElems.innerHTML = dt + dd;
    } else {
      genreElems.innerHTML = dt + `<dd class="genre">${mangaData.genres}</dd>`;
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong: ${error}`,
    });
  }
});
