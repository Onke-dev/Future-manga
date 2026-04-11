import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMangas } from './api.js';
import { mangasHomeTemplate } from './renders-pages.js';

// 1. Импортируем jQuery и саму библиотеку
import $ from 'jquery';
// 1. РОБИМО JQUERY ГЛОБАЛЬНИМ (Щоб Pagination.js його побачив)
window.$ = window.jQuery = $;

let allMangasData = [];

function getItemsPerPage() {
  return window.innerWidth >= 1440 ? 8 : 9;
}

let itemsPerPage = getItemsPerPage();

const refs = {
  listElems: document.querySelector('.js-manga-render'),
};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await import('paginationjs');
    allMangasData = await getMangas();
    initPagination();
  } catch (error) {
    iziToast.error({ title: 'Error', message: `Error ${error}` });
  }
});

function initPagination() {
  // Находим твой контейнер (убедись, что в HTML у него id="pagination-numbers")
  $('#pagination-numbers').pagination({
    dataSource: allMangasData, // Отдаем библиотеке ВСЮ базу
    pageSize: itemsPerPage, // По сколько штук резать
    showPrevious: false, // Убираем кнопку "Назад" (как на твоем скрине)
    showNext: false, // Убираем кнопку "Вперед"

    // Это главная функция, которая срабатывает при каждом клике на страницу
    callback: function (data, pagination) {
      // В переменной "data" библиотека УЖЕ отдала тебе нужный обрезанный кусок массива (8 штук)!

      // 1. Рисуем карточки
      const markup = mangasHomeTemplate(data);
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
    initPagination(); 
  }
});
