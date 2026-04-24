import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { auth, onAuthStateChanged } from './firebase-api.js';
import { getMangasId } from './api.js';
import { cardsItemsTemplate } from './renders-pages.js';

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
    // 1. Отримання всіх "лайків", пов'язаних з ID конкретного користувача
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

    // 2. Fetch full manga details for each liked ID concurrently
    // 2. Отримання повних даних про кожну мангу за її ID паралельно
    const mangaPromises = likesData.map(like => getMangasId(like.mangaId));
    const mangasData = await Promise.all(mangaPromises);

    // 3. Render cards to the page
    // 3. Рендеринг карток на сторінку
    listLiked.innerHTML = cardsItemsTemplate(mangasData);
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load favorites',
    });
  }
});

/**
 * Event delegation for removing items from favorites
 * Делегування подій для видалення елементів з обраного
 */
listLiked.addEventListener('click', async e => {
  if (e.target.classList.contains('delete')) {
    const mangaIdToDelete = e.target.dataset.id;
    const user = auth.currentUser;

    try {
      // Find the specific like record ID in json-server
      // Пошук ID конкретного запису про "лайк" у json-server
      const likeRes = await fetch(
        `http://localhost:3000/likes?userId=${user.uid}&mangaId=${mangaIdToDelete}`
      );
      const likeData = await likeRes.json();

      if (likeData.length > 0) {
        const likeId = likeData[0].id; // Primary key in the 'likes' table

        // Remove the record from the database
        // Видалення запису з бази даних
        await fetch(`http://localhost:3000/likes/${likeId}`, {
          method: 'DELETE',
        });

        // Remove the element from the DOM
        // Видалення елемента з DOM
        e.target.closest('.carditem').remove();

        iziToast.success({
          title: 'Success',
          message: 'Manga removed from favorites!',
        });

        // Show empty state message if no items remain
        // Відображення повідомлення про порожній список, якщо елементів не залишилося
        if (listLiked.children.length === 0) {
          listLiked.innerHTML =
            '<li style="color: #fff; font-family: var(--second-family);">Your list is empty.</li>';
        }
      }
    } catch (error) {
      console.error(error);
      iziToast.error({ title: 'Error', message: 'Failed to delete item' });
    }
  }
});
