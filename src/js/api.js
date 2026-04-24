import axios from 'axios';

/**
 * Base URL for the local database server
 * Базова адреса локального сервера бази даних
 */
const BASE_URL = 'http://localhost:3000';

/**
 * Fetches all manga records from the database
 * Отримання всіх записів манги з бази даних
 */
export async function getMangas() {
  try {
    const response = await axios.get(`${BASE_URL}/mangas`);
    // Axios automatically parses JSON into the .data property
    // Axios автоматично парсить JSON у властивість .data
    return response.data;
  } catch (error) {
    console.error('Error loading manga database:', error);
    // Returning an empty array on error to prevent application crashes
    // Повернення порожнього масиву у разі помилки, щоб уникнути збоїв у роботі додатка
    return [];
  }
}

/**
 * Fetches a single manga record by its unique ID
 * Отримання одного запису манги за її унікальним ID
 */
export async function getMangasId(id) {
  try {
    const response = await axios.get(`${BASE_URL}/mangas/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error loading manga with ID ${id}:`, error);
    return null;
  }
}

/**
 * Adds a new manga record to the database via the admin panel
 * Додавання нового запису манги до бази даних через панель адміністратора
 */
export async function addNewManga(newManga) {
  try {
    const response = await axios.post(`${BASE_URL}/mangas`, newManga);
    return response.data;
  } catch (error) {
    console.error('Error adding new manga to database:', error);
  }
}

/**
 * Deletes a manga record from the database by ID
 * Видалення запису манги з бази даних за ID
 */
export async function deleteManga(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/mangas/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting manga from database:', error);
  }
}

/**
 * Updates an existing manga record using partial data (PATCH)
 * Оновлення існуючого запису манги за допомогою часткових даних (PATCH)
 */
export async function updateManga(id, updatedManga) {
  try {
    const response = await axios.patch(
      `${BASE_URL}/mangas/${id}`,
      updatedManga
    );
    return response.data;
  } catch (error) {
    console.error('Error updating manga in database:', error);
  }
}

/**
 * Uploads an image to the ImgBB cloud service and returns the direct URL
 * Завантаження зображення у хмарний сервіс ImgBB та повернення прямого посилання
 */
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
    // Return the direct URL of the uploaded image
    // Повернення прямого посилання на завантажене зображення
    return response.data.data.url;
  } catch (error) {
    console.error('Error uploading image to ImgBB:', error);
    throw error;
  }
}
