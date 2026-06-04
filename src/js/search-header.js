import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMangas } from './api.js';
import { searchMagasTemplate } from './renders-pages.js';

const baseUrl = import.meta.env.BASE_URL;

// Шукаємо ВСІ інпути та ВСІ списки результатів (і для ПК, і для мобілки)
const searchInputs = document.querySelectorAll('.jsHeaderSearch');
const resultLists = document.querySelectorAll('.js-list-search');

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

// Проходимося циклом по кожному знайденому інпуту
searchInputs.forEach((inputHeader, index) => {
  // Беремо відповідний список для поточного інпуту (ПК до ПК, мобайл до мобайлу)
  const listElems = resultLists[index];

  inputHeader.addEventListener('input', e => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length < 2) {
      listElems.innerHTML = '';
      listElems.style.display = 'none';
      return;
    }

    const mangaFilter = allMangasData.filter(manga =>
      manga.title.toLowerCase().includes(query)
    );

    if (mangaFilter.length === 0) {
      listElems.innerHTML = '<li class="no-results">Mangas not found</li>';
      listElems.style.display = 'block';
    } else {
      const topMangas = mangaFilter.slice(0, 5);
      listElems.innerHTML = searchMagasTemplate(topMangas);
      listElems.style.display = 'block';
    }
  });
});

// Закриття списку при кліку поза його межами (для всіх пошуків)
document.addEventListener('click', e => {
  searchInputs.forEach((inputHeader, index) => {
    const listElems = resultLists[index];
    if (!inputHeader.contains(e.target) && !listElems.contains(e.target)) {
      listElems.innerHTML = '';
      listElems.style.display = 'none';
      inputHeader.value = ''; // Очищаємо інпут при закритті
    }
  });
});
