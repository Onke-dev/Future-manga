import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { auth, onAuthStateChanged } from './firebase-api.js';
import { getMangasId } from './api.js';
import { cardsItemsTemplate } from './renders-pages.js';

const listLiked = document.querySelector('.list-items');

// Ждем, пока Firebase проверит авторизацию
onAuthStateChanged(auth, async user => {
  if (!user) {
    listLiked.innerHTML =
      '<li style="color: #fff; font-family: var(--second-family);">Пожалуйста, войдите в аккаунт, чтобы увидеть избранное.</li>';
    return;
  }

  try {
    // 1. Получаем все лайки КОНКРЕТНОГО юзера
    const likesRes = await fetch(
      `http://localhost:3000/likes?userId=${user.uid}`
    );
    if (!likesRes.ok) throw new Error('Не удалось загрузить список');
    const likesData = await likesRes.json();

    if (likesData.length === 0) {
      listLiked.innerHTML =
        '<li style="color: #fff; font-family: var(--second-family);">Ваш список пуст.</li>';
      return;
    }

    // 2. Получаем полные данные о каждой манге по её ID
    // map создаст массив промисов, а Promise.all выполнит их одновременно
    const mangaPromises = likesData.map(like => getMangasId(like.mangaId));
    const mangasData = await Promise.all(mangaPromises);

    // 3. Рендерим карточки на страницу
    listLiked.innerHTML = cardsItemsTemplate(mangasData);
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Ошибка',
      message: 'Не удалось загрузить избранное',
    });
  }
});

// =======================================================
// ЛОГИКА УДАЛЕНИЯ ИЗ ИЗБРАННОГО
// =======================================================
listLiked.addEventListener('click', async e => {
  // Если кликнули по кнопке DELETE
  if (e.target.classList.contains('delete')) {
    const mangaIdToDelete = e.target.dataset.id;
    const user = auth.currentUser;

    try {
      // Ищем ID самой записи "лайка" в json-server
      const likeRes = await fetch(
        `http://localhost:3000/likes?userId=${user.uid}&mangaId=${mangaIdToDelete}`
      );
      const likeData = await likeRes.json();

      if (likeData.length > 0) {
        const likeId = likeData[0].id; // id записи в таблице likes

        // Удаляем из базы
        await fetch(`http://localhost:3000/likes/${likeId}`, {
          method: 'DELETE',
        });

        // Удаляем карточку со страницы
        e.target.closest('.carditem').remove();

        iziToast.success({
          title: 'ОК',
          message: 'Манга удалена из избранного!',
        });

        // Если удалили последнюю
        if (listLiked.children.length === 0) {
          listLiked.innerHTML =
            '<li style="color: #fff; font-family: var(--second-family);">Ваш список пуст.</li>';
        }
      }
    } catch (error) {
      console.error(error);
      iziToast.error({ title: 'Ошибка', message: 'Не удалось удалить' });
    }
  }
});
