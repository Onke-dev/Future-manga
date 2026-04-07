// This function for Home page
const refs = {
  modalChange: document.querySelector('.modalChangeManga'),
};

export function openModal() {
  refs.modalChange.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

export function hideModal() {
  refs.modalChange.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

export function dataElems(formData) {
  const infoData = {
    alt: formData.get('cover_alt').replace(/\s+/g, ' ').trim(),
    title: formData.get('name-manga').replace(/\s+/g, ' ').trim(),
    author: formData.get('name-author').replace(/\s+/g, ' ').trim(),
    summary: formData.get('manga-summary').replace(/\s+/g, ' ').trim(),
  };
  return infoData;
}

export function mangaHomeTemplate(manga) {
  const { id, cover1x, cover2x, title, alt } = manga;
  return `<li class="manga-item">
  <div class="manga">
    <a href="./manga/manga-template.html?id=${id}">
      <img
        class="manga-img"
        src="${cover1x}"
        srcset="${cover1x} 1x, ${cover2x} 2x"
        width="180"
        height="257"
        alt="${alt}"
      />
    </a>
    <a href="./manga/manga-template.html?id=${id}">
      <h2 class="title-manga">${title}</h2>
    </a>
  </div>
</li>`;
}

export function mangasHomeTemplate(mangas) {
  return mangas.map(mangaHomeTemplate).join('');
}

// This function for admin panel
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
