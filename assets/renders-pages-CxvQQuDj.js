const o={modalChange:document.querySelector(".modalChangeManga")};function d(){o.modalChange.classList.add("is-open"),document.body.classList.add("no-scroll")}function h(){o.modalChange.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function p(a){return{alt:a.get("cover_alt").replace(/\s+/g," ").trim(),title:a.get("name-manga").replace(/\s+/g," ").trim(),author:a.get("name-author").replace(/\s+/g," ").trim(),summary:a.get("manga-summary").replace(/\s+/g," ").trim()}}function b(a){return{title:(a.get("find-name-manga")||"").replace(/\s+/g," ").trim(),author:(a.get("find-author")||"").replace(/\s+/g," ").trim()}}function r(a){const{id:e,cover1x:l,cover2x:n,title:s,alt:t}=a;return`<li class="manga-item" data-id=${e}>
  <div class="manga">
    <a href="./pages/admin_panel/manga-template.html?id=${a.id}">
      <img
        class="manga-img"
        src="${l}"
        srcset="${l} 1x, ${n} 2x"
        width="180"
        height="257"
        alt="${t}"
      />
    </a>
    <a href="./pages/admin_panel/manga-template.html?id=${a.id}">
      <h2 class="title-manga">${s}</h2>
    </a>
  </div>
</li>`}function v(a){return a.map(r).join("")}function c(a){const{id:e,cover1x:l,cover2x:n,title:s,alt:t}=a;return`<li class="manga-item" data-id=${e}>
  <div class="manga">
    <a href="../../pages/admin_panel/manga-template.html?id=${a.id}">
      <img
        class="manga-img"
        src="${l}"
        srcset="${l} 1x, ${n} 2x"
        width="180"
        height="257"
        alt="${t}"
      />
    </a>
    <a href="../../pages/admin_panel/manga-template.html?id=${a.id}">
      <h2 class="title-manga">${s}</h2>
    </a>
  </div>
</li>`}function f(a){return a.map(c).join("")}function m(a){const{id:e,cover1x:l,cover2x:n,title:s,alt:t}=a;return`<li class="manga-itemPanel">
              <img
                class="img-manga-panel"
                src="${l}"
                srcset="${l} 1x, ${n} 2x"
                alt="${t}"
                width="180"
                height="257"
              />
              <h2 class="title-manga-panel">${s}</h2>
              <div class="wrap-btns">
                <button class="btn-manga showMore" type="button" data-id="${e}">SHOW MORE</button>
                <button class="btn-manga change" type="button" data-id="${e}">CHANGE</button>
                <button class="btn-manga delete" type="button" data-id="${e}">DELETE</button>
              </div>
            </li>`}function $(a){return a.map(m).join("")}const y=[{value:"action",label:"Action"},{value:"adventure",label:"Adventure"},{value:"comedy",label:"Comedy"},{value:"crime",label:"Crime"},{value:"drama",label:"Drama"},{value:"fantasy",label:"Fantasy"},{value:"gossip",label:"Gossip"},{value:"historical",label:"Historical"},{value:"horror",label:"Horror"},{value:"isekai",label:"Isekai"},{value:"josei",label:"Josei"},{value:"magic",label:"Magic"},{value:"mature",label:"Mature"},{value:"mystery",label:"Mystery"},{value:"psychological",label:"Psychological"},{value:"romance",label:"Romance"},{value:"school_life",label:"School Life"},{value:"sci-fi",label:"Sci-Fi"},{value:"seinen",label:"Seinen"},{value:"shoujo",label:"Shoujo"},{value:"shounen",label:"Shounen"},{value:"slice_of_life",label:"Slice of Life"},{value:"sports",label:"Sports"},{value:"supernatural",label:"Supernatural"},{value:"thriller",label:"Thriller"},{value:"tragedy",label:"Tragedy"}];function u(a){const{value:e,label:l}=a;return`<label class="genreManga">
  <input type="checkbox" name="manga_genres" value="${e}" class="genre-checkbox" />
  <span class="name_genre">${l}</span>
</label>`}function x(a){return a.map(u).join("")}function T(){document.addEventListener("click",a=>{const e=a.target.closest(".js-genres-select");if(e){e.nextElementSibling.classList.toggle("is-open");return}a.target.closest(".custom-multi-select")||document.querySelectorAll(".js-elems-list.is-open").forEach(l=>{l.classList.remove("is-open")})})}function g(a){const{cover1x:e,cover2x:l,alt:n,title:s,id:t}=a,i="/Future-manga/";return`<li class="item-header">
            <a href="${i}pages/admin_panel/manga-template.html?id=${t}">
              <img
               class="img-manga-header"
                src="${e}"
                srcset="${e} 1x, ${l} 2x"
                alt="${n}"
                width="180"
                height="257"
              />
            </a>
            <a href="${i}pages/admin_panel/manga-template.html?id=${t}">
              <h2 class="header-search-title">${s}</h2>
            </a>
          </li>`}function S(a){return a.map(g).join("")}export{b as a,f as b,y as c,T as d,$ as e,p as f,x as g,m as h,h as i,v as m,d as o,S as s};
//# sourceMappingURL=renders-pages-CxvQQuDj.js.map
