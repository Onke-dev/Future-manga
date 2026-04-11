import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMangas } from './api.js';
import {
  dropDownWindow,
  genresTemplate,
  mangaGenres,
  serarchElems,
  mangasTemplate,
} from './renders-pages.js';

// 1. Импортируем jQuery и саму библиотеку
import $ from 'jquery';
// 1. РОБИМО JQUERY ГЛОБАЛЬНИМ (Щоб Pagination.js його побачив)
window.$ = window.jQuery = $;

let allMangasData;
let currentRenderData = [];

function getItemsPerPage() {
  return window.innerWidth >= 1440 ? 8 : 9;
}

let itemsPerPage = getItemsPerPage();

const refs = {
  formSearch: document.querySelector('.js-search-form'),
  listElems: document.querySelector('.js-manga-render'),
  pagination: document.querySelector('#pagination-numbers'),
};

document.addEventListener('DOMContentLoaded', async () => {
  const markupGenres = genresTemplate(mangaGenres);
  document.querySelectorAll('.js-elems-list').forEach(element => {
    element.innerHTML = markupGenres;
  });
  dropDownWindow();

  await import('paginationjs');
  allMangasData = await getMangas();
  currentRenderData = allMangasData;
  initPagination(currentRenderData);
});

refs.formSearch.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const infoData = serarchElems(formData);

  const checkGenres = Array.from(
    e.target.querySelectorAll('input[type="checkbox"]:checked')
  ).map(checkbox => checkbox.value);
  const mangaData = {
    title: infoData.title,
    author: infoData.author,
    status: formData.get('take-status-manga') || '',
    genres: checkGenres,
  };

  if (
    !mangaData.title &&
    !mangaData.author &&
    !mangaData.status &&
    mangaData.genres.length === 0
  ) {
    return iziToast.warning({
      title: 'Caution',
      message: 'Please fill in all fields! Spaces only are not allowed.',
    });
  }

  const filterResult = filterMangas(allMangasData, mangaData);
  refs.listElems.innerHTML = '';

  if (filterResult.length === 0) {
    refs.listElems.innerHTML =
      '<p class="no-results">Sorry, no manga found with these filters.</p>';
    refs.pagination.innerHTML = '';
  } else {
    currentRenderData = filterResult;
    initPagination(currentRenderData);
  }
});

function filterMangas(allMangas, infoData) {
  return allMangas.filter(manga => {
    const mangaTitle =
      infoData.title === '' ||
      manga.title.toLowerCase().includes(infoData.title.toLowerCase());
    const mangaAuthor =
      infoData.author === '' ||
      manga.author.toLowerCase().includes(infoData.author.toLowerCase());
    const mangaStatus =
      infoData.status === '' || manga.status === infoData.status;
    const mangaGenres =
      infoData.genres.length === 0 ||
      infoData.genres.every(genre => manga.genres.includes(genre));
    return mangaTitle && mangaAuthor && mangaStatus && mangaGenres;
  });
}

function initPagination(arrayToPaginate) {
  // Находим твой контейнер (убедись, что в HTML у него id="pagination-numbers")
  $('#pagination-numbers').pagination({
    dataSource: arrayToPaginate, // Отдаем библиотеке ВСЮ базу
    pageSize: itemsPerPage, // По сколько штук резать
    showPrevious: false, // Убираем кнопку "Назад" (как на твоем скрине)
    showNext: false, // Убираем кнопку "Вперед"

    // Это главная функция, которая срабатывает при каждом клике на страницу
    callback: function (data, pagination) {
      // В переменной "data" библиотека УЖЕ отдала тебе нужный обрезанный кусок массива (8 штук)!

      // 1. Рисуем карточки
      const markup = mangasTemplate(data);
      refs.listElems.innerHTML = markup;

      // 2. Делаем плавный скролл наверх (только если это не самая первая загрузка)
      if (pagination.direction !== 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
  });
}

window.addEventListener('resize', () => {
  const newItemsPerPage = getItemsPerPage();

  if (newItemsPerPage !== itemsPerPage) {
    itemsPerPage = newItemsPerPage;
    initPagination(currentRenderData);
  }
});
