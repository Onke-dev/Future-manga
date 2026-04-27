import { getMangasId } from './api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Firebase imports for storage operations
// Імпорт Firebase для операцій зі сховищем
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, auth } from './firebase-api.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

/**
 * DOM Elements references
 * Посилання на елементи DOM
 */
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
  btnAddLiked: document.querySelector('.btn_add'),
  addChapterBtn: document.querySelector('btn_add-manga'),
};

onAuthStateChanged(auth, user => {
  if (user) {
    const adminEmail = 'angertina777@ukr.net';

    if (user.email === adminEmail) {
      // ИЩЕМ КНОПКУ ПРЯМО ЗДЕСЬ, а не берем из refs
      const adminBtn = document.getElementById('btn-open-add-chapter');

      if (adminBtn) {
        adminBtn.style.display = 'block';
        console.log('Кнопка админа успешно показана!');
      } else {
        console.error(
          'Скрипт понял, что ты админ, но не смог найти кнопку в HTML! Проверь, точно ли у неё id="btn-open-add-chapter"'
        );
      }
    } else {
      console.log('Зайшов звичайний юзер. Кнопка прихована.');
    }
  }
});

document.addEventListener('DOMContentLoaded', async () => {
  // Extract Manga ID from URL parameters
  // Отримання ID манги з параметрів URL
  const query = window.location.search;
  const urlParam = new URLSearchParams(query);
  const mangaId = urlParam.get('id');

  if (!mangaId) {
    iziToast.error({
      title: 'Error',
      message: `Manga ID not found in URL!`,
    });
    return;
  }

  // =====================================================================
  // 1. MODAL LOGIC: ADD CHAPTER
  // Логіка модального вікна: Додати главу
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

  /**
   * Favorites/Liked logic
   * Логіка додавання в обране
   */
  if (refs.btnAddLiked) {
    refs.btnAddLiked.addEventListener('click', async e => {
      const btn = e.currentTarget;
      btn.disabled = true;
      btn.style.opacity = '0.5';

      const user = auth.currentUser;
      if (!user) {
        iziToast.warning({
          title: 'Attention',
          message: 'Please sign in to your account!',
        });
        btn.disabled = false;
        btn.style.opacity = '1';
        return;
      }

      try {
        // Check if already in favorites
        // Перевірка, чи вже є в обраному
        const checkRes = await fetch(
          `http://localhost:3000/likes?userId=${user.uid}&mangaId=${mangaId}`
        );
        const checkData = await checkRes.json();

        if (checkData.length > 0) {
          iziToast.info({
            title: 'Info',
            message: 'This manga is already in your list!',
          });
          return;
        }

        const newLike = { userId: user.uid, mangaId: mangaId };

        const response = await fetch('http://localhost:3000/likes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newLike),
        });

        if (!response.ok) throw new Error('Server error');

        iziToast.success({
          title: 'Success!',
          message: 'Manga added to favorites!',
        });

        btn.textContent = 'Added ✓';
      } catch (error) {
        console.error(error);
        iziToast.error({
          title: 'Error',
          message: 'Failed to add to favorites.',
        });
        btn.disabled = false;
        btn.style.opacity = '1';
      }
    });
  }

  // =====================================================================
  // 2. RENDERING MANGA INFO AND CHAPTER LIST
  // Отрисовка інформації про мангу та списку глав
  // =====================================================================
  try {
    const mangaData = await getMangasId(mangaId);

    if (!mangaData) {
      throw new Error(`Manga with ID "${mangaId}" not found in database!`);
    }

    // Populate UI with manga data
    // Заповнення інтерфейсу даними манги
    refs.coverElem.src = mangaData.cover2x || mangaData.cover1x;
    refs.coverElem.alt = mangaData.alt;
    refs.titleManga.textContent = mangaData.title;
    refs.statusManga.textContent = mangaData.status;
    refs.authorName.textContent = mangaData.author;
    refs.summaryManga.textContent = mangaData.summary;

    document.title = `${mangaData.title}`;

    if (refs.mainName) refs.mainName.textContent = mangaData.title;

    /**
     * Breadcrumbs navigation logic
     * Логіка навігації (хлібні крихти)
     */
    if (refs.navigationList) {
      const previousPage = document.referrer;
      let breadcrumbsHTML = `
        <li class="item-goe home">
          <a class="location" href="../../index.html" data-key="home_location">Home</a>
        </li>
      `;

      if (previousPage.includes('manga.html')) {
        sessionStorage.setItem('cameFromCatalog', 'true');
        breadcrumbsHTML += `<li class="item-goe home"><a class="location" href="../../pages/manga/manga.html">Manga</a></li>`;
      } else if (previousPage.includes('admin_panel.html')) {
        breadcrumbsHTML += `
          <li class="item-goe home"><a class="location" href="../../pages/account/user_account.html">My Account</a></li>
          <li class="item-goe home"><a class="location" href="../../pages/admin_panel/admin_panel.html">Admin Panel</a></li>
        `;
      } else if (previousPage.includes('user_account.html')) {
        breadcrumbsHTML += `<li class="item-goe home"><a class="location" href="../../pages/account/user_account.html">My Account</a></li>`;
      } else if (previousPage.includes('about_us.html')) {
        breadcrumbsHTML += `<li class="item-goe home"><a class="location" href="../../pages/about_us/about_us.html">About us</a></li>`;
      }

      breadcrumbsHTML += `<li class="item-goe"><span class="location js-breadcrumb-name">${mangaData.title}</span></li>`;
      refs.navigationList.innerHTML = breadcrumbsHTML;
    }

    // Genres handling
    // Обробка жанрів
    const dt = `<dt class="title">Genres:</dt>`;
    const genreList = Array.isArray(mangaData.genres)
      ? mangaData.genres.join(', ')
      : mangaData.genres.split(' ').join(', ');
    refs.genreElems.innerHTML = dt + `<dd class="genre">${genreList}</dd>`;

    // Fetch and display chapters
    // Отримання та відображення глав
    const chaptersResponse = await fetch(
      `http://localhost:3000/chapters?mangaId=${mangaId}`
    );
    if (!chaptersResponse.ok) throw new Error('Failed to load chapters');
    const chaptersData = await chaptersResponse.json();

    if (chaptersData.length > 0) {
      // Sort chapters descending
      // Сортування глав за спаданням
      chaptersData.sort((a, b) => b.chapter - a.chapter);

      const lastChapterNum = chaptersData[0].chapter;
      const firstChapterNum = chaptersData[chaptersData.length - 1].chapter;

      if (refs.readFirstBtn)
        refs.readFirstBtn.href = `../../pages/read/read.html?id=${mangaId}&chapter=${firstChapterNum}`;
      if (refs.readLastBtn)
        refs.readLastBtn.href = `../../pages/read/read.html?id=${mangaId}&chapter=${lastChapterNum}`;

      const chaptersMarkup = chaptersData
        .map(ch => {
          const dateObj = new Date(ch.dateAdded);
          const formattedDate = dateObj.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });
          return `
          <li class="item-chapter">
            <div class="wrap_item">
              <a class="chapter_link" href="../../pages/read/read.html?id=${mangaId}&chapter=${ch.chapter}">Chapter ${ch.chapter}</a>
              <span class="chapter_date">${formattedDate}</span>
            </div>
          </li>
        `;
        })
        .join('');
      refs.chaptersList.innerHTML = chaptersMarkup;
    } else {
      if (refs.readFirstBtn) refs.readFirstBtn.style.display = 'none';
      if (refs.readLastBtn) refs.readLastBtn.style.display = 'none';
      refs.chaptersList.innerHTML = `<li style="color: #fff;">No chapters added yet.</li>`;
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
    });
  }

  // =====================================================================
  // 3. FIREBASE & JSON-SERVER DATA SUBMISSION
  // Відправка даних у Firebase та JSON-SERVER
  // =====================================================================
  const form = document.getElementById('add-chapter-form');

  if (form) {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const chapterNumber = document.getElementById('chapter-number').value;

      const desktopFiles = document.getElementById('pages-desktop').files;
      const tabletFiles = document.getElementById('pages-tablet').files;
      const mobileFiles = document.getElementById('pages-mobile').files;

      if (
        desktopFiles.length === 0 ||
        tabletFiles.length === 0 ||
        mobileFiles.length === 0
      ) {
        alert('Please upload files for ALL devices (Desktop, Tablet, Mobile)!');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Uploading... (this may take a while)';
      submitBtn.disabled = true;

      try {
        const allFiles = [...desktopFiles, ...tabletFiles, ...mobileFiles];
        // Numeric sort for filenames
        // Числове сортування імен файлів
        allFiles.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { numeric: true })
        );

        const pagesData = {
          desktop1x: [],
          desktop2x: [],
          tablet1x: [],
          tablet2x: [],
          mobile1x: [],
          mobile2x: [],
        };

        // Upload files to Firebase Storage
        // Завантаження файлів у сховище Firebase
        for (const file of allFiles) {
          const filePath = `Chapters/${mangaId}/chapter_${chapterNumber}/${file.name}`;
          const fileRef = ref(storage, filePath);
          const snapshot = await uploadBytes(fileRef, file);
          const downloadUrl = await getDownloadURL(snapshot.ref);

          // Assign URLs based on filename conventions
          // Розподіл URL на основі назв файлів
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

        const newChapterData = {
          mangaId: mangaId,
          chapter: Number(chapterNumber),
          pages: pagesData,
          dateAdded: new Date().toISOString().split('T')[0],
        };

        const response = await fetch('http://localhost:3000/chapters', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newChapterData),
        });

        if (!response.ok) throw new Error('Server error');

        alert(`Chapter ${chapterNumber} successfully added!`);
        form.reset();
        addChapterModal.classList.remove('is-visible');
        window.location.reload();
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during upload.');
      } finally {
        submitBtn.textContent = 'Add Chapter';
        submitBtn.disabled = false;
      }
    });
  }
});
