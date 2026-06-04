import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { auth, onAuthStateChanged } from './firebase-api.js';
import { getMangasId } from './api.js';
import { cardsItemsTemplate } from './renders-pages.js';
import axios from 'axios';

const listLiked = document.querySelector('.list-items');

/**
 * Monitor authentication state to load user-specific favorites
 * Моніторинг стану автентифікації для завантаження обраного конкретного користувача
 */
onAuthStateChanged(auth, async user => {
  if (!user) {
    listLiked.innerHTML =
      '<li style="color: #fff; font-family: var(--second-family);">Please sign in to view your favorites.</li>';
    return;
  }

  try {
    // 1. Fetch all likes associated with the specific user ID
    const likesRes = await fetch(
      `http://localhost:3000/likes?userId=${user.uid}`
    );
    if (!likesRes.ok) throw new Error('Failed to load list');
    const likesData = await likesRes.json();

    if (likesData.length === 0) {
      listLiked.innerHTML =
        '<li style="color: #fff; font-family: var(--second-family);">Your list is empty.</li>';
      return;
    }

    // 2. Extract manga IDs from the likes data
    const mangaIds = likesData.map(like => like.mangaId);

    // 3. Fetch detailed manga data for each ID
    const mangasData = await Promise.all(mangaIds.map(id => getMangasId(id)));

    // 4. Render the manga cards
    const markup = cardsItemsTemplate(mangasData);
    listLiked.innerHTML = markup;
  } catch (error) {
    console.error('Error loading liked mangas:', error);
    listLiked.innerHTML =
      '<li style="color: #fff; font-family: var(--second-family);">Failed to load favorites.</li>';
  }
});

/**
 * Handle click actions on the liked items list
 * Обробка кліків по списку обраного (Delete та Show More)
 */
// ОСЬ ЦЕЙ РЯДОК БУВ ПРОПУЩЕНИЙ:
listLiked.addEventListener('click', async e => {
  // --- ЛОГИКА ДЛЯ КНОПКИ DELETE ---
  if (e.target.classList.contains('delete')) {
    const mangaIdToDelete = e.target.dataset.id;
    const user = auth.currentUser;

    // Блокуємо кнопку, щоб уникнути подвійних кліків під час запиту
    const btn = e.target;
    btn.disabled = true;
    btn.style.opacity = '0.5';

    try {
      // 1. Шукаємо запис у базі через Axios
      const likeRes = await axios.get(
        `http://localhost:3000/likes?userId=${user.uid}&mangaId=${mangaIdToDelete}`
      );

      const likeData = likeRes.data;

      if (likeData.length > 0) {
        const likeId = likeData[0].id;

        // 2. Видаляємо запис через Axios
        await axios.delete(`http://localhost:3000/likes/${likeId}`);

        // 3. Видаляємо карточку з екрана
        btn.closest('.carditem').remove();

        iziToast.success({
          title: 'Success',
          message: 'Manga removed from favorites!',
        });

        // 4. Якщо список порожній - показуємо повідомлення
        if (listLiked.children.length === 0) {
          listLiked.innerHTML =
            '<li style="color: #fff; font-family: var(--second-family);">Your list is empty.</li>';
        }
      }
    } catch (error) {
      console.error('Delete favorite error:', error);

      // Якщо сервер лежить, Axios гарантовано перекине нас сюди!
      iziToast.error({
        title: 'Error',
        message: 'Failed to remove from favorites. Server is unavailable.',
      });

      // Розблоковуємо кнопку, бо дія не вдалася
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  }

  /// --- ЛОГИКА ДЛЯ КНОПКИ SHOW MORE ---
  if (e.target.classList.contains('showMore')) {
    const btn = e.target;
    const mangaId = btn.dataset.id;
    const baseUrl = import.meta.env.BASE_URL;

    // 1. Сразу блокируем кнопку и показываем состояние загрузки
    btn.disabled = true;
    btn.style.opacity = '0.5';
    btn.style.cursor = 'wait';

    try {
      // 2. Делаем тестовый пинг-запрос к базе данных (проверяем, жива ли она)
      await axios.get(`http://localhost:3000/mangas/${mangaId}`);

      // 3. Если сервер ответил успешно — выполняем переход на страницу
      window.location.href = `${baseUrl}pages/manga-deteils/manga-template.html?id=${mangaId}`;
    } catch (error) {
      console.error('Show more error:', error);

      // 4. Если сервер выключен или недоступен — показываем ошибку
      iziToast.error({
        title: 'Error',
        message: 'Cannot open manga details. Server is unavailable.',
      });

      // 5. Оставляем кнопку серой, меняем текст и блокируем навсегда
      btn.textContent = 'UNAVAILABLE';
      btn.style.cursor = 'not-allowed';
      btn.style.backgroundColor = '#555'; // Принудительно делаем фон серым
      // btn.disabled = true и opacity = 0.5 остаются активными
    }
  } // --- ЛОГИКА ДЛЯ КНОПКИ SHOW MORE ---
  if (e.target.classList.contains('showMore')) {
    const btn = e.target;
    const mangaId = btn.dataset.id;
    const baseUrl = import.meta.env.BASE_URL;

    // 1. Сразу блокируем кнопку и показываем состояние загрузки
    btn.disabled = true;
    btn.style.opacity = '0.5';
    btn.style.cursor = 'wait';

    try {
      // 2. Делаем тестовый пинг-запрос к базе данных (проверяем, жива ли она)
      await axios.get(`http://localhost:3000/mangas/${mangaId}`);

      // 3. Если сервер ответил успешно — выполняем переход на страницу
      window.location.href = `${baseUrl}pages/manga-deteils/manga-template.html?id=${mangaId}`;
    } catch (error) {
      console.error('Show more error:', error);

      // 4. Если сервер выключен или недоступен — показываем ошибку
      iziToast.error({
        title: 'Error',
        message: 'Cannot open manga details. Server is unavailable.',
      });

      // 5. Оставляем кнопку серой, меняем текст и блокируем навсегда
      btn.textContent = 'UNAVAILABLE';
      btn.style.cursor = 'not-allowed';
      btn.style.backgroundColor = '#555'; // Принудительно делаем фон серым
      // btn.disabled = true и opacity = 0.5 остаются активными
    }
  }
}); // І ОСЬ ЦЯ ЗАКРИВАЮЧА ДУЖКА БУЛА ПРОПУЩЕНА
