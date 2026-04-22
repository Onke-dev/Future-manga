import { getMangasId } from './api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Импортируем Firebase
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase-api.js'; // Убедись, что путь к файлу правильный!

const refs = {
  coverElem: document.querySelector('.js-cover'),
  titleManga: document.querySelector('.js-title'),
  statusManga: document.querySelector('.js-status'),
  authorName: document.querySelector('.js-author'),
  summaryManga: document.querySelector('.js-summary-container'),
  genreElems: document.querySelector('.genres-manga'),
  chaptersList: document.querySelector('.list-chapters'),
  mainName: document.querySelector('.js-main-name'),
  navigationList: document.querySelector('.js-navigation-list'),
  readFirstBtn: document.querySelector('[data-key="readFirst"]'),
  readLastBtn: document.querySelector('[data-key="readLast"]'),
};

document.addEventListener('DOMContentLoaded', async () => {
  // Получаем ID манги из URL (например, ?id=1)
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

  // =====================================================================
  // 1. ЛОГИКА ОТКРЫТИЯ/ЗАКРЫТИЯ МОДАЛКИ "ADD CHAPTER"
  // =====================================================================
  const openModalBtn = document.getElementById('btn-open-add-chapter');
  const addChapterModal = document.getElementById('modal-add-chapter');
  const closeModalBtn = document.querySelector(
    '[data-modal-close="add-chapter"]'
  );

  if (openModalBtn && addChapterModal) {
    openModalBtn.addEventListener('click', () => {
      addChapterModal.classList.add('is-visible');
    });

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        addChapterModal.classList.remove('is-visible');
      });
    }

    addChapterModal.addEventListener('click', event => {
      if (event.target === addChapterModal) {
        addChapterModal.classList.remove('is-visible');
      }
    });
  }

  // =====================================================================
  // 2. ОТРИСОВКА ИНФОРМАЦИИ О МАНГЕ И СПИСКА ГЛАВ
  // =====================================================================
  try {
    const mangaData = await getMangasId(mangaId);

    console.log('1. ID который мы ищем:', mangaId);
    console.log('2. Что вернула база:', mangaData);

    // Защита: если база вернула пустоту, останавливаем скрипт и выдаем понятную ошибку
    if (!mangaData) {
      throw new Error(`Манга с ID "${mangaId}" не найдена в базе (db.json)!`);
    }

    refs.coverElem.src = mangaData.cover2x || mangaData.cover1x;
    refs.coverElem.alt = mangaData.alt;
    refs.titleManga.textContent = mangaData.title;
    refs.statusManga.textContent = mangaData.status;
    refs.authorName.textContent = mangaData.author;
    refs.summaryManga.textContent = mangaData.summary;

    document.title = `${mangaData.title}`;

    if (refs.mainName) {
      refs.mainName.textContent = mangaData.title;
    }

    if (refs.navigationList) {
      const previousPage = document.referrer;

      // 1. Базовое начало (Home всегда первый)
      let breadcrumbsHTML = `
        <li class="item-goe home">
          <a class="location" href="../../index.html" data-key="home_location">Home</a>
        </li>
      `;

      if (previousPage.includes('manga.html')) {
        // Если из общего каталога
        sessionStorage.setItem('cameFromCatalog', 'true');
        breadcrumbsHTML += `
          <li class="item-goe home">
            <a class="location" href="../../pages/manga/manga.html" data-key="manga">Manga</a>
          </li>
        `;
      } else if (previousPage.includes('index.html') || previousPage === '') {
        // Если с главной
        sessionStorage.setItem('cameFromCatalog', 'false');
      } else if (previousPage.includes('admin_panel.html')) {
        // ЕСЛИ ИЗ АДМИНКИ
        sessionStorage.setItem('cameFromCatalog', 'false'); // Тоже сбрасываем память каталога
        breadcrumbsHTML += `
          <li class="item-goe home">
            <a class="location" href="../../pages/account/user_account.html" data-key="account">My Account</a>
          </li>
          <li class="item-goe home">
            <a class="location" href="../../pages/admin_panel/admin_panel.html" data-key="admin">Admin Panel</a>
          </li>
        `;
      } else if (previousPage.includes('user_account.html')) {
        // Если из аккаунта
        sessionStorage.setItem('cameFromCatalog', 'false');
        breadcrumbsHTML += `
          <li class="item-goe home">
            <a class="location" href="../../pages/account/user_account.html" data-key="account">My Account</a>
          </li>
        `;
      }

      // 3. Финальная точка (название манги)
      breadcrumbsHTML += `
        <li class="item-goe">
          <span class="location js-breadcrumb-name">${mangaData.title}</span>
        </li>
      `;

      refs.navigationList.innerHTML = breadcrumbsHTML;
    }

    const dt = `<dt class="title" data-key="title_genre">Genres:</dt>`;
    if (Array.isArray(mangaData.genres)) {
      const genreManga = mangaData.genres.join(', ');
      refs.genreElems.innerHTML = dt + `<dd class="genre">${genreManga}</dd>`;
    } else {
      const genreManga = mangaData.genres.split(' ').join(', ');
      refs.genreElems.innerHTML = dt + `<dd class="genre">${genreManga}</dd>`;
    }

    const chaptersResponse = await fetch(
      `http://localhost:3000/chapters?mangaId=${mangaId}`
    );
    if (!chaptersResponse.ok) throw new Error('Не удалось загрузить главы');
    const chaptersData = await chaptersResponse.json();

    if (chaptersData.length > 0) {
      // 1. Сортируем главы от большего к меньшему
      chaptersData.sort((a, b) => b.chapter - a.chapter);

      // =======================================================
      // ЛОГИКА КНОПКИ READ FIRST / READ LAST
      // =======================================================
      // Берем самую первую (в конце массива) и самую последнюю (в начале массива) главы
      const lastChapterNum = chaptersData[0].chapter;
      const firstChapterNum = chaptersData[chaptersData.length - 1].chapter;

      if (refs.readFirstBtn) {
        refs.readFirstBtn.href = `../../pages/read/read.html?id=${mangaId}&chapter=${firstChapterNum}`;
      }
      if (refs.readLastBtn) {
        refs.readLastBtn.href = `../../pages/read/read.html?id=${mangaId}&chapter=${lastChapterNum}`;
      }
      // =======================================================

      // 2. Отрисовка списка глав
      const chaptersMarkup = chaptersData
        .map(ch => {
          const dateObj = new Date(ch.dateAdded);
          // ИСПРАВЛЕНА ДАТА: теперь месяц будет подставляться автоматически (Jan, Feb, Mar...)
          const formattedDate = dateObj.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });
          return `
          <li class="item-chapter">
            <div class="wrap_item">
              <a class="chapter_link" href="../../pages/read/read.html?id=${mangaId}&chapter=${ch.chapter}">
                Chapter ${ch.chapter}
              </a>
              <span class="chapter_date">${formattedDate}</span>
            </div>
          </li>
        `;
        })
        .join('');
      refs.chaptersList.innerHTML = chaptersMarkup;
    } else {
      // Прячем кнопки, если глав еще нет
      if (refs.readFirstBtn) refs.readFirstBtn.style.display = 'none';
      if (refs.readLastBtn) refs.readLastBtn.style.display = 'none';
      refs.chaptersList.innerHTML = `<li style="color: #fff; font-family: var(--second-family);">No chapters added yet.</li>`;
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong: ${error}`,
    });
  }

  // =====================================================================
  // 3. ОТПРАВКА ДАННЫХ В FIREBASE И JSON-SERVER (МУЛЬТИ-РАЗРЕШЕНИЕ)
  // =====================================================================
  const form = document.getElementById('add-chapter-form');

  if (form) {
    form.addEventListener('submit', async event => {
      event.preventDefault();

      const chapterNumber = document.getElementById('chapter-number').value;

      // 1. Получаем файлы из всех трех инпутов
      const desktopFiles = document.getElementById('pages-desktop').files;
      const tabletFiles = document.getElementById('pages-tablet').files;
      const mobileFiles = document.getElementById('pages-mobile').files;

      if (
        desktopFiles.length === 0 ||
        tabletFiles.length === 0 ||
        mobileFiles.length === 0
      ) {
        alert(
          'Будь ласка, завантажте файли для ВСІХ пристроїв (Desktop, Tablet, Mobile)!'
        );
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Завантаження... (це може зайняти час)';
      submitBtn.disabled = true;

      try {
        // 2. Объединяем все файлы в один большой массив
        const allFiles = [...desktopFiles, ...tabletFiles, ...mobileFiles];

        // 3. УМНАЯ СОРТИРОВКА: чтобы 'page-2' была перед 'page-10'
        allFiles.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { numeric: true })
        );

        // 4. Создаем объект для хранения готовых ссылок по категориям
        const pagesData = {
          desktop1x: [],
          desktop2x: [],
          tablet1x: [],
          tablet2x: [],
          mobile1x: [],
          mobile2x: [],
        };

        // 5. ЗАГРУЗКА В FIREBASE
        for (const file of allFiles) {
          const filePath = `Chapters/${mangaId}/chapter_${chapterNumber}/${file.name}`;
          const fileRef = ref(storage, filePath);
          const snapshot = await uploadBytes(fileRef, file);
          const downloadUrl = await getDownloadURL(snapshot.ref);

          // 6. Раскидываем ссылки по массивам, читая ИМЯ файла!
          if (file.name.includes('desktop-1x'))
            pagesData.desktop1x.push(downloadUrl);
          else if (file.name.includes('desktop-2x'))
            pagesData.desktop2x.push(downloadUrl);
          else if (file.name.includes('tablet-1x'))
            pagesData.tablet1x.push(downloadUrl);
          else if (file.name.includes('tablet-2x'))
            pagesData.tablet2x.push(downloadUrl);
          else if (file.name.includes('mob-1x'))
            pagesData.mobile1x.push(downloadUrl);
          else if (file.name.includes('mob-2x'))
            pagesData.mobile2x.push(downloadUrl);
        }

        console.log('Успешно загружены ссылки:', pagesData);

        // 7. ФОРМИРУЕМ JSON
        const newChapterData = {
          mangaId: mangaId,
          chapter: Number(chapterNumber),
          pages: pagesData, // <-- Передаем весь объект с отсортированными ссылками
          dateAdded: new Date().toISOString().split('T')[0],
        };

        // 8. ОТПРАВКА В JSON-SERVER
        const response = await fetch('http://localhost:3000/chapters', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newChapterData),
        });

        if (!response.ok) throw new Error('Помилка сервера');

        alert(`Глава ${chapterNumber} успішно додана!`);

        form.reset();
        document
          .getElementById('modal-add-chapter')
          .classList.remove('is-visible');
        window.location.reload();
      } catch (error) {
        console.error('Ошибка:', error);
        alert('Сталася помилка під час завантаження.');
      } finally {
        submitBtn.textContent = 'Add Chapter';
        submitBtn.disabled = false;
      }
    });
  }
}); // <-- Это закрывающая скобка для DOMContentLoaded, не забудь её!
