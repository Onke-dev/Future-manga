// Импортируем нужные инструменты Storage (если используешь модульный SDK v9+)
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase-api.js';
form.addEventListener('submit', async event => {
  event.preventDefault();

  const chapterNumber = document.getElementById('chapter-number').value;
  const fileInput = document.getElementById('chapter-pages');
  const files = fileInput.files; // Массив всех выбранных картинок

  if (files.length === 0) {
    alert('Будь ласка, виберіть хоча б одну сторінку!');
    return;
  }

  // Блокируем кнопку, чтобы не нажали дважды
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.textContent = 'Завантаження...';
  submitBtn.disabled = true;

  try {
    const imageUrls = [];
    const mangaId = 'solo-leveling'; // В будущем будешь брать это динамически

    // =========================================================
    // ЭТАП 1: ЗАГРУЗКА В FIREBASE STORAGE
    // =========================================================
    // Используем цикл for...of для последовательной загрузки (это надежнее для больших файлов)
    for (const file of files) {
      // 1. Создаем путь в Firebase: Chapters / Имя Манги / Глава_Номер / Имя_файла
      const filePath = `Chapters/${mangaId}/chapter_${chapterNumber}/${file.name}`;

      // 2. Создаем ссылку (reference) на этот путь
      const fileRef = ref(storage, filePath);

      // 3. Отправляем сам файл в Firebase
      const snapshot = await uploadBytes(fileRef, file);

      // 4. Получаем публичную URL-ссылку на загруженную картинку
      const downloadUrl = await getDownloadURL(snapshot.ref);

      // 5. Пушим готовую ссылку в наш массив
      imageUrls.push(downloadUrl);
    }

    console.log('Успешно загружены ссылки:', imageUrls);

    // =========================================================
    // ЭТАП 2: ОТПРАВКА ДАННЫХ В JSON-SERVER
    // =========================================================
    const newChapterData = {
      mangaId: mangaId,
      chapter: Number(chapterNumber),
      pages: imageUrls, // <-- Передаем массив настоящих ссылок из Firebase!
      dateAdded: new Date().toISOString().split('T')[0],
    };

    const response = await fetch('http://localhost:3000/chapters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newChapterData),
    });

    if (!response.ok) throw new Error('Помилка сервера');

    alert(`Глава ${chapterNumber} успішно додана!`);

    // Очищаем форму и закрываем модалку
    form.reset();
    document.getElementById('modal-add-chapter').classList.remove('is-visible');
  } catch (error) {
    console.error('Ошибка:', error);
    alert('Сталася помилка під час завантаження.');
  } finally {
    // Возвращаем кнопку в норму
    submitBtn.textContent = 'Add Chapter';
    submitBtn.disabled = false;
  }
});
