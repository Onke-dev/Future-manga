import { addNewManga } from './api.js';
import iziToast from 'izitoast';


const form = document.querySelector('.js-add-manga');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const mangaData = {
    cover: formData.get('cover_manga'),
    title: formData.get('name-manga'),
    status: formData.get('status-manga'),
    author: formData.get('name-author'),
    genres: formData.get('genres-manga'),
    summary: formData.get('manga-summary'),
  };

  try {
    await addNewManga(mangaData);
    console.log('Good job, u added new manga', mangaData);
  } catch (error) {}

  form.reset();
});
