import axios from 'axios';

// Зберігаємо адресу нашої бази даних у константу
const BASE_URL = 'http://localhost:3000';

// add manga to the admin panel
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
    console.error('Помилка при видаленні манги з бази манги:', error);
  }
}

export async function updateManga(id, updatedManga) {
  try {
    const response = await axios.patch(
      `${BASE_URL}/mangas/${id}`,
      updatedManga
    );
    return response.data;
  } catch (error) {
    console.error('Помилка при оновленні манги до бази манги:', error);
  }
}

export async function uploadImgUser(img) {
  const key = 'b4c2e2dd57a22e0b112660df85c660bb';

  const formData = new FormData();
  formData.append('image', img);
  formData.append('key', key);

  try {
    const response = await axios.post(
      'https://api.imgbb.com/1/upload',
      formData
    );
    return response.data.data.url;
  } catch (error) {
    console.error('Error loading image', error);
    throw error;
  }
}
