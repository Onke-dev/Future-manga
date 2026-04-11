import { getMangasId } from './api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  coverElem: document.querySelector('.js-cover'),
  titleManga: document.querySelector('.js-title'),
  statusManga: document.querySelector('.js-status'),
  authorName: document.querySelector('.js-author'),
  summaryManga: document.querySelector('.js-summary-container'),
  genreElems: document.querySelector('.genres-manga'),
};

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

    refs.coverElem.src = mangaData.cover2x || mangaData.cover1x;
    refs.coverElem.alt = mangaData.alt;

    refs.titleManga.textContent = mangaData.title;
    refs.statusManga.textContent = mangaData.status;
    refs.authorName.textContent = mangaData.author;
    refs.summaryManga.textContent = mangaData.summary;

    const dt = `<dt class="title" data-key="title_genre">Genres:</dt>`;
    if (Array.isArray(mangaData.genres)) {
      const genreManga = mangaData.genres.join(', ');
      refs.genreElems.innerHTML = dt + `<dd class="genre">${genreManga}</dd>`;
    } else {
      const genreManga = mangaData.genres.split(' ').join(', ');
      refs.genreElems.innerHTML = dt + `<dd class="genre">${genreManga}</dd>`;
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong: ${error}`,
    });
  }
});
