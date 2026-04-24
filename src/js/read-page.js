import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMangasId } from './api.js';

/**
 * DOM Element References
 * Посилання на елементи DOM
 */
const refs = {
  chapterTitle: document.getElementById('js-chapter-title'),
  pagesList: document.getElementById('js-pages-list'),
  navigationList: document.getElementById('js-navigation-list'),
};

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const mangaId = params.get('id');
  const chapterNum = params.get('chapter');

  if (!mangaId || !chapterNum) {
    iziToast.error({
      title: 'Error',
      message: 'Manga ID or chapter number missing from URL!',
    });
    return;
  }

  try {
    const mangaData = await getMangasId(mangaId);

    if (refs.chapterTitle) {
      refs.chapterTitle.textContent = `${mangaData.title}, Chapter ${chapterNum}`;
    }

    document.title = `${mangaData.title}, Chapter ${chapterNum}`;

    /**
     * DYNAMIC BREADCRUMBS (WITH SESSION MEMORY)
     * Динамічні "хлібні крихти" (з пам'яттю сесії)
     */
    if (refs.navigationList) {
      // Check if user arrived from the catalog
      // Перевірка, чи прийшов користувач із каталогу
      const fromCatalog = sessionStorage.getItem('cameFromCatalog') === 'true';

      let breadcrumbsHTML = `
        <li class="item-goe home">
          <a class="location" href="../../index.html" data-key="home_location">Home</a>
        </li>
      `;

      if (fromCatalog) {
        breadcrumbsHTML += `
          <li class="item-goe home">
            <a class="location" href="../../pages/manga/manga.html" data-key="manga">Manga</a>
          </li>
        `;
      }

      // Link back to the specific manga details page
      // Посилання назад на сторінку деталей манги
      breadcrumbsHTML += `
        <li class="item-goe home">
          <a class="location" href="../../pages/manga-deteils/manga-template.html?id=${mangaId}">${mangaData.title}</a>
        </li>
        <li class="item-goe">
          <span class="location js-breadcrumb-name">Chapter ${chapterNum}</span>
        </li>
      `;

      refs.navigationList.innerHTML = breadcrumbsHTML;
    }

    /**
     * FETCHING AND RENDERING CHAPTER PAGES
     * Отримання та відмальовування сторінок глави
     */
    const response = await fetch(
      `http://localhost:3000/chapters?mangaId=${mangaId}&chapter=${chapterNum}`
    );
    if (!response.ok) throw new Error('Server request failed');

    const [chapterData] = await response.json();
    if (!chapterData || !chapterData.pages)
      throw new Error('Chapter not found or empty!');

    const pages = chapterData.pages;
    const totalPages = pages.desktop1x.length;
    let markup = '';

    // Generate responsive picture markup for each page
    // Генерація адаптивної розмітки picture для кожної сторінки
    for (let i = 0; i < totalPages; i++) {
      markup += `
        <li class="chapter-item">
          <div class="img-chapter">
            <picture>
              <source srcset="${pages.desktop1x[i]} 1x, ${pages.desktop2x[i]} 2x" media="(min-width: 1440px)" />
              <source srcset="${pages.tablet1x[i]} 1x, ${pages.tablet2x[i]} 2x" media="(min-width: 768px)" />
              <source srcset="${pages.mobile1x[i]} 1x, ${pages.mobile2x[i]} 2x" media="(max-width: 767px)" />
              <img class="img-page" src="${pages.mobile1x[i]}" alt="Page ${i + 1}" loading="lazy" width="100%" />
            </picture>
          </div>
        </li>
      `;
    }

    if (refs.pagesList) refs.pagesList.innerHTML = markup;
  } catch (error) {
    console.error('Chapter render error:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load chapter pages.',
    });
  }

  /**
   * NEXT CHAPTER BUTTON LOGIC
   * Логіка кнопки "Наступна глава"
   */
  const nextChapterBtn = document.getElementById('js-next-chapter');

  if (nextChapterBtn) {
    // Fetch all chapters to determine navigation order
    // Запит всіх глав для визначення черговості навігації
    const allChaptersRes = await fetch(
      `http://localhost:3000/chapters?mangaId=${mangaId}`
    );
    const allChapters = await allChaptersRes.json();

    // Sort chapters ascending (1, 2, 3...)
    // Сортування глав за зростанням (1, 2, 3...)
    allChapters.sort((a, b) => a.chapter - b.chapter);

    // Identify the index of the current chapter
    // Визначення індексу поточної глави
    const currentIndex = allChapters.findIndex(
      ch => ch.chapter === Number(chapterNum)
    );

    // Update button link if a subsequent chapter exists
    // Оновлення посилання кнопки, якщо наступна глава існує
    if (currentIndex !== -1 && currentIndex < allChapters.length - 1) {
      const nextChapterNum = allChapters[currentIndex + 1].chapter;
      nextChapterBtn.href = `?id=${mangaId}&chapter=${nextChapterNum}`;
    } else {
      // Hide button if current chapter is the latest
      // Приховування кнопки, якщо поточна глава є останньою
      nextChapterBtn.style.display = 'none';
    }
  }
});
