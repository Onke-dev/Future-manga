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
   * NAVIGATION BUTTONS LOGIC (PREV & NEXT)
   * Логіка кнопок навігації "Попередня" та "Наступна" глава
   */

  // Отримуємо кнопки за їхніми ID (переконайся, що в read.html ти додав ці ID до тегів <a>)
  const prevChapterBtn = document.getElementById('prev-btn');
  const nextChapterBtn = document.getElementById('next-btn');

  // Робимо запит всіх глав для цієї манги, щоб зрозуміти порядок
  const allChaptersRes = await fetch(
    `http://localhost:3000/chapters?mangaId=${mangaId}`
  );
  const allChapters = await allChaptersRes.json();

  // Сортуємо глави за зростанням (0, 1, 2...)
  allChapters.sort((a, b) => a.chapter - b.chapter);

  // Знаходимо, якою по рахунку (індекс) є поточна глава в масиві
  const currentIndex = allChapters.findIndex(
    ch => ch.chapter === Number(chapterNum)
  );

  if (currentIndex !== -1) {
    // --- 1. ЛОГІКА ДЛЯ КНОПКИ "НАЗАД" ---
    if (prevChapterBtn) {
      if (currentIndex > 0) {
        // Якщо це НЕ перша глава, беремо номер попередньої і показуємо кнопку
        const prevChapterNum = allChapters[currentIndex - 1].chapter;
        prevChapterBtn.href = `?id=${mangaId}&chapter=${prevChapterNum}`;
        prevChapterBtn.style.display = 'inline-block';
      } else {
        // Якщо це найперша глава (індекс 0), ховаємо кнопку
        prevChapterBtn.style.display = 'none';
      }
    }

    // --- 2. ЛОГІКА ДЛЯ КНОПКИ "ВПЕРЕД" ---
    if (nextChapterBtn) {
      if (currentIndex < allChapters.length - 1) {
        // Якщо це НЕ остання глава, беремо номер наступної і показуємо кнопку
        const nextChapterNum = allChapters[currentIndex + 1].chapter;
        nextChapterBtn.href = `?id=${mangaId}&chapter=${nextChapterNum}`;
        nextChapterBtn.style.display = 'inline-block';
      } else {
        // Якщо це остання глава, ховаємо кнопку
        nextChapterBtn.style.display = 'none';
      }
    }
  }
});
