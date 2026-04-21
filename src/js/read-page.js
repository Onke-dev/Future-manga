import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getMangasId } from './api.js';

const refs = {
  chapterTitle: document.getElementById('js-chapter-title'),
  pagesList: document.getElementById('js-pages-list'),
  navigationList: document.getElementById('js-navigation-list'), // <-- ДОБАВИЛИ РЕФ
};

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const mangaId = params.get('id');
  const chapterNum = params.get('chapter');

  if (!mangaId || !chapterNum) {
    iziToast.error({
      title: 'Error',
      message: 'ID манги или номер главы не найдены в URL!',
    });
    return;
  }

  try {
    const mangaData = await getMangasId(mangaId);

    if (refs.chapterTitle) {
      refs.chapterTitle.textContent = `${mangaData.title}, Chapter ${chapterNum}`;
    }

    document.title = `${mangaData.title}, Chapter ${chapterNum}`;

    // =====================================================================
    // ДИНАМИЧЕСКИЕ ХЛЕБНЫЕ КРОШКИ (С ПАМЯТЬЮ)
    // =====================================================================
    if (refs.navigationList) {
      // 1. Вспоминаем: был ли юзер в каталоге?
      const fromCatalog = sessionStorage.getItem('cameFromCatalog') === 'true';

      let breadcrumbsHTML = `
        <li class="item-goe home">
          <a class="location" href="../../index.html" data-key="home_location">Home</a>
        </li>
      `;

      // 2. Если был в каталоге, рисуем этот шаг
      if (fromCatalog) {
        breadcrumbsHTML += `
          <li class="item-goe home">
            <a class="location" href="../../pages/manga/manga.html" data-key="manga">Manga</a>
          </li>
        `;
      }

      // 3. Шаг со ссылкой НАЗАД на страницу манги (manga-template.html)
      // Обрати внимание на путь! Если нужно, поправь manga-deteils на свое название папки.
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
    // =====================================================================

    // ... ДАЛЬШЕ ИДЕТ ТВОЙ СТАРЫЙ КОД РЕНДЕРА КАРТИНОК ...
    const response = await fetch(
      `http://localhost:3000/chapters?mangaId=${mangaId}&chapter=${chapterNum}`
    );
    if (!response.ok) throw new Error('Ошибка при запросе к серверу');

    const [chapterData] = await response.json();
    if (!chapterData || !chapterData.pages)
      throw new Error('Глава не найдена или пуста!');

    const pages = chapterData.pages;
    const totalPages = pages.desktop1x.length;
    let markup = '';

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
    console.error('Ошибка рендера главы:', error);
    iziToast.error({
      title: 'Error',
      message: 'Не удалось загрузить страницы главы.',
    });
  }

  // =====================================================================
  // ЛОГИКА КНОПКИ "СЛЕДУЮЩАЯ ГЛАВА"
  // =====================================================================
  const nextChapterBtn = document.getElementById('js-next-chapter');

  if (nextChapterBtn) {
    // 1. Получаем все главы этой манги из базы
    const allChaptersRes = await fetch(
      `http://localhost:3000/chapters?mangaId=${mangaId}`
    );
    const allChapters = await allChaptersRes.json();

    // 2. Сортируем главы по возрастанию (0, 1, 2, 3...)
    allChapters.sort((a, b) => a.chapter - b.chapter);

    // 3. Ищем, под каким индексом в массиве находится текущая глава
    const currentIndex = allChapters.findIndex(
      ch => ch.chapter === Number(chapterNum)
    );

    // 4. Проверяем, есть ли глава ПОСЛЕ текущей
    if (currentIndex !== -1 && currentIndex < allChapters.length - 1) {
      // Следующая глава есть! Берем ее номер
      const nextChapterNum = allChapters[currentIndex + 1].chapter;

      // Меняем ссылку у кнопки
      // (остаемся на этой же странице read.html, просто меняем параметр chapter)
      nextChapterBtn.href = `?id=${mangaId}&chapter=${nextChapterNum}`;
    } else {
      // Следующей главы нет (мы читаем самую последнюю).
      // Прячем кнопку, чтобы не сбивать с толку.
      nextChapterBtn.style.display = 'none';
    }
  }
  // =====================================================================
});
