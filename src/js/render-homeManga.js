// Импортируем наш ЗАПРОС
import { getMangas } from './api.js';
const mangaList = document.querySelector('.js-manga-render');

// ==========================================
// ЧАСТЬ 1: РЕНДЕР (Render)
// ==========================================
function renderMangaCards(mangas) {
  const markup = mangas
    .map(manga => {
      const { id, cover1x, cover2x, title, alt } = manga;
      return `<li class="manga-item">
  <div class="manga">
    <a href="./manga/manga-template.html?id=${id}">
      <img
        class="manga-img"
        src="${cover1x}"
        srcset="
                    ${cover1x} 1x,
                    ${cover2x} 2x
                  "
        width="180"
        height="257"
        alt="${alt}"
      />
    </a>
    <a href="./manga/manga-template.html?id=${id}">
      <h2 class="title-manga">${title}</h2>
    </a>
  </div>
</li>`;
    })
    .join('');
  mangaList.innerHTML = markup;
}

// ==========================================
// ЧАСТЬ 2: ПОДІЯ (Event)
// ==========================================
async function onPageLoad() {
  await getMangas()
  // 1. Сделай ЗАПРОС к API и дождись ответа (используй await getMangas())
  // Сохрани результат в переменную (например, const data = ...)
  // 2. Передай полученную переменную в функцию РЕНДЕРА
  // renderMangaCards(data);
}

// 3. Повесь слушатель событий на документ.
// Когда HTML полностью загрузится ('DOMContentLoaded'), должна запуститься функция onPageLoad
document.addEventListener('DOMContentLoaded', onPageLoad);
