import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMangas } from './api.js';
import { searchMagasTemplate } from './renders-pages.js';

const baseUrl = import.meta.env.BASE_URL;

const refs = {
  inputHeader: document.querySelector('.jsHeaderSearch'),
  listElems: document.querySelector('.js-list-search'),
  btnSearch: document.querySelector('.btn-search'),
};

let allMangasData = [];

document.addEventListener('DOMContentLoaded', async () => {
  try {
    allMangasData = await getMangas();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Oppps, ${error}`,
    });
  }
});

refs.inputHeader.addEventListener('input', e => {
  const query = e.target.value.trim().toLowerCase();

  if (query.length < 2) {
    refs.listElems.innerHTML = '';
    refs.listElems.style.display = 'none';
    return;
  }

  const mangaFilter = allMangasData.filter(manga =>
    manga.title.toLowerCase().includes(query)
  );

  if (mangaFilter.length === 0) {
    refs.listElems.innerHTML = '<li class="no-results">Mangas not found</li>';
    refs.listElems.style.display = 'block';
  } else {
    const topMangas = mangaFilter.slice(0, 5);
    refs.listElems.innerHTML = searchMagasTemplate(topMangas);
    refs.listElems.style.display = 'block';
  }
});

document.addEventListener('click', e => {
  if (
    !refs.inputHeader.contains(e.target) &&
    !refs.listElems.contains(e.target)
  ) {
    refs.listElems.style.display = 'none';
  }
});

refs.btnSearch.addEventListener('click', e => {
  const query = refs.inputHeader.value.trim();

  if (query) {
    window.location.href = `${baseUrl}pages/manga-deteils/manga-template.html?title=${query}`;
  }
});

refs.inputHeader.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    refs.btnSearch.click();
  }
});
