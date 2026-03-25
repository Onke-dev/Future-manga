
import { getMangas } from './api.js';


function itemTemplate(manga) {
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

function itemsTemplate(mangas) {
  return mangas.map(itemTemplate).join('');
}
