// This function for Home page
export function mangaHomeTemplate(manga) {
  const { id, cover1x, cover2x, title, alt } = manga;
  return `<li class="manga-item">
  <div class="manga">
    <a href="./manga/manga-template.html?id=${id}">
      <img
        class="manga-img"
        src="${cover1x}"
        srcset="
                    ${cover1x} 1x,
                    ${cover2x} 2x
                  "
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
                <button class="btn-manga change" type="button">CHANGE</button>
                <button class="btn-manga showMore" type="button">
                  SHOW MORE
                </button>
                <button class="btn-manga delete" type="button">DELETE</button>
              </div>
            </li>`;
}

export function mangasPanleTemplate(mangas) {
  return mangas.map(mangaPanleTemplate).join('');
}
