/**
 * Global references for page elements
 * Глобальні посилання на елементи сторінки
 */
const refs = {
  modalChange: document.querySelector('.modalChangeManga'),
};

/**
 * Modal visibility controls
 * Керування видимістю модального вікна
 */
export function openModal() {
  refs.modalChange.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

export function hideModal() {
  refs.modalChange.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

/**
 * Normalizes form data by removing extra whitespace
 * Нормалізація даних форми шляхом видалення зайвих пробілів
 */
export function dataElems(formData) {
  const infoData = {
    alt: formData.get('cover_alt').replace(/\s+/g, ' ').trim(),
    title: formData.get('name-manga').replace(/\s+/g, ' ').trim(),
    author: formData.get('name-author').replace(/\s+/g, ' ').trim(),
    summary: formData.get('manga-summary').replace(/\s+/g, ' ').trim(),
  };
  return infoData;
}

/**
 * Extracts search parameters from the search form
 * Вилучення параметрів пошуку з форми пошуку
 */
export function serarchElems(formData) {
  const infoData = {
    title: (formData.get('find-name-manga') || '').replace(/\s+/g, ' ').trim(),
    author: (formData.get('find-author') || '').replace(/\s+/g, ' ').trim(),
  };
  return infoData;
}

/**
 * HTML Template for a single manga card on the Home page
 * HTML-шаблон для однієї картки манги на головній сторінці
 */
export function mangaHomeTemplate(manga) {
  const { id, cover1x, cover2x, title, alt } = manga;
  return `<li class="manga-item" data-id=${id}>
  <div class="manga">
    <a href="./pages/manga-deteils/manga-template.html?id=${id}">
      <img
        class="manga-img"
        src="${cover1x}"
        srcset="${cover1x} 1x, ${cover2x} 2x"
        width="180"
        height="257"
        alt="${alt}"
      />
    </a>
    <a href="./pages/manga-deteils/manga-template.html?id=${id}">
      <h2 class="title-manga">${title}</h2>
    </a>
  </div>
</li>`;
}

export function mangasHomeTemplate(mangas) {
  return mangas.map(mangaHomeTemplate).join('');
}

/**
 * HTML Template for a single manga card on secondary pages
 * HTML-шаблон для однієї картки манги на другорядних сторінках
 */
export function mangaTemplate(manga) {
  const { id, cover1x, cover2x, title, alt } = manga;
  return `<li class="manga-item" data-id=${id}>
  <div class="manga">
    <a href="../../pages/manga-deteils/manga-template.html?id=${id}">
      <img
        class="manga-img"
        src="${cover1x}"
        srcset="${cover1x} 1x, ${cover2x} 2x"
        width="180"
        height="257"
        alt="${alt}"
      />
    </a>
    <a href="../../pages/manga-deteils/manga-template.html?id=${id}">
      <h2 class="title-manga">${title}</h2>
    </a>
  </div>
</li>`;
}

export function mangasTemplate(mangas) {
  return mangas.map(mangaTemplate).join('');
}

/**
 * Template for manga items within the Admin Panel list
 * Шаблон для елементів манги у списку панелі адміністратора
 */
export function mangaPanleTemplate(manga) {
  const { id, cover1x, cover2x, title, alt } = manga;
  return `<li class="manga-itemPanel">
              <img
                class="img-manga-panel"
                src="${cover1x}"
                srcset="${cover1x} 1x, ${cover2x} 2x"
                alt="${alt}"
                width="180"
                height="257"
              />
              <h2 class="title-manga-panel">${title}</h2>
              <div class="wrap-btns">
                <button class="btn-manga showMore" type="button" data-id="${id}">SHOW MORE</button>
                <button class="btn-manga change" type="button" data-id="${id}">CHANGE</button>
                <button class="btn-manga delete" type="button" data-id="${id}">DELETE</button>
              </div>
            </li>`;
}

export function mangasPanleTemplate(mangas) {
  return mangas.map(mangaPanleTemplate).join('');
}

/**
 * Constant list of available manga genres
 * Константний список доступних жанрів манги
 */
export const mangaGenres = [
  { value: 'action', label: 'Action' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'crime', label: 'Crime' },
  { value: 'drama', label: 'Drama' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'gossip', label: 'Gossip' },
  { value: 'historical', label: 'Historical' },
  { value: 'horror', label: 'Horror' },
  { value: 'isekai', label: 'Isekai' },
  { value: 'josei', label: 'Josei' },
  { value: 'magic', label: 'Magic' },
  { value: 'mature', label: 'Mature' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'psychological', label: 'Psychological' },
  { value: 'romance', label: 'Romance' },
  { value: 'school_life', label: 'School Life' },
  { value: 'sci-fi', label: 'Sci-Fi' },
  { value: 'seinen', label: 'Seinen' },
  { value: 'shoujo', label: 'Shoujo' },
  { value: 'shounen', label: 'Shounen' },
  { value: 'slice_of_life', label: 'Slice of Life' },
  { value: 'sports', label: 'Sports' },
  { value: 'supernatural', label: 'Supernatural' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'tragedy', label: 'Tragedy' },
];

/**
 * Template for genre checkboxes
 * Шаблон для чекбоксів жанрів
 */
export function genreTemplate(item) {
  const { value, label } = item;
  return `<label class="genreManga">
  <input type="checkbox" name="manga_genres" value="${value}" class="genre-checkbox" />
  <span class="name_genre">${label}</span>
</label>`;
}
export function genresTemplate(items) {
  return items.map(genreTemplate).join('');
}

/**
 * Logic for the custom dropdown genre selection menu
 * Логіка для випадаючого меню вибору жанрів
 */
export function dropDownWindow() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.js-genres-select');

    if (btn) {
      const dropDown = btn.nextElementSibling;
      dropDown.classList.toggle('is-open');
      return;
    }

    if (!e.target.closest('.custom-multi-select')) {
      document.querySelectorAll('.js-elems-list.is-open').forEach(dropDown => {
        dropDown.classList.remove('is-open');
      });
    }
  });
}

/**
 * Template for manga search results in the header
 * Шаблон для результатів пошуку манги в хедері
 */
export function searchMagaTemplate(manga) {
  const { cover1x, cover2x, alt, title, id } = manga;
  const baseUrl = import.meta.env.BASE_URL;
  return `<li class="item-header">
            <a href="${baseUrl}pages/manga-deteils/manga-template.html?id=${id}">
              <img
               class="img-manga-header"
                src="${cover1x}"
                srcset="${cover1x} 1x, ${cover2x} 2x"
                alt="${alt}"
                width="180"
                height="257"
              />
            </a>
            <a href="${baseUrl}pages/manga-deteils/manga-template.html?id=${id}">
              <h2 class="header-search-title">${title}</h2>
            </a>
          </li>`;
}
export function searchMagasTemplate(mangas) {
  return mangas.map(searchMagaTemplate).join('');
}

/**
 * UI State controls: Loader and Navigation visibility
 * Керування станом інтерфейсу: видимість лоадера та навігації
 */
const loader = document.querySelector('.wrap-loader');
const navigation = document.querySelector('.geolocatio');

export function showLoader() {
  if (loader) loader.classList.remove('hidden');
}

export function hideLoader() {
  if (loader) loader.classList.add('hidden');
}

export function hideNavigation() {
  if (navigation) navigation.classList.add('hidden');
}

export function showNavigation() {
  if (navigation) navigation.classList.remove('hidden');
}

/**
 * Template for items in the user's favorites/liked list
 * Шаблон для елементів у списку обраного користувача
 */
export function cardItemTemplate(cardItem) {
  const { id, cover1x, cover2x, title, alt } = cardItem;
  return `<li class="carditem">
              <img
                class="img-card"
                src="${cover1x}"
                srcset="${cover1x} 1x, ${cover2x} 2x"
                alt="${alt}"
                width="180"
                height="257"
              />
              <h2 class="name-manga">${title}</h2>
              <div class="wrap-btns">
                <button class="btn-manga showMore" type="button" data-id="${id}">SHOW MORE</button>
                <button class="btn-manga delete" type="button" data-id="${id}">DELETE</button>
              </div>
            </li>`;
}
export function cardsItemsTemplate(cardsItem) {
  return cardsItem.map(cardItemTemplate).join('');
}
