import axios from 'axios';

// Зберігаємо адресу нашої бази даних у константу
const BASE_URL = 'http://localhost:3000';

// add manga on the home page
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

export async function getMangasId(id) {
  try {
    const response = await axios.get(`${BASE_URL}/mangas/${id}`);
    // Axios автоматично кладе JSON у властивість .data
    return response.data;
  } catch (error) {
    console.error('Помилка при завантаженні бази манги:', error);
    return null;
  }
}

export async function addNewManga(newManga) {
  try {
    const response = await axios.post(`${BASE_URL}/mangas`, newManga);
    // Axios автоматично кладе JSON у властивість .data
    return response.data;
  } catch (error) {
    console.error('Помилка при завантаженні бази манги:', error);
  }
}

export async function deleteManga(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/mangas/${id}`);
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error ${error} while removing a manga from the manga database`,
    });
  }
}
