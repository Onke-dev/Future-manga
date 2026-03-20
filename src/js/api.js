import axios from 'axios';

// Зберігаємо адресу нашої бази даних у константу
const BASE_URL = 'http://localhost:3000';

// Експортуємо функцію, щоб її можна було викликати з інших файлів
export async function getMangas() {
  try {
    const response = await axios.get(`${BASE_URL}/mangas`);
    // Axios автоматично кладе JSON у властивість .data
    return response.data;
  } catch (error) {
    console.error('Помилка при завантаженні бази манги:', error);
    return []; // Якщо сталася помилка, повертаємо порожній масив, щоб сайт не зламався
  }
}
