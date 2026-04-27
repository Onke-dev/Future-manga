import{h as o,i as p}from"./vendor-Dk5KRYwc.js";const i="http://localhost:3000";async function h(){try{return(await o.get(`${i}/mangas`)).data}catch(e){return console.error("Error loading manga database:",e),[]}}async function M(e){try{return(await o.get(`${i}/mangas/${e}`)).data}catch(a){return console.error(`Error loading manga with ID ${e}:`,a),null}}async function S(e){try{return(await o.post(`${i}/mangas`,e)).data}catch(a){console.error("Error adding new manga to database:",a)}}async function T(e){try{return(await o.delete(`${i}/mangas/${e}`)).data}catch(a){console.error("Error deleting manga from database:",a)}}async function H(e,a){try{return(await o.patch(`${i}/mangas/${e}`,a)).data}catch(t){console.error("Error updating manga in database:",t)}}async function k(e){const a="b4c2e2dd57a22e0b112660df85c660bb",t=new FormData;t.append("image",e),t.append("key",a);try{return(await o.post("https://api.imgbb.com/1/upload",t)).data.data.url}catch(n){throw console.error("Error uploading image to ImgBB:",n),n}}const u={modalChange:document.querySelector(".modalChangeManga")};function j(){u.modalChange.classList.add("is-open"),document.body.classList.add("no-scroll")}function D(){u.modalChange.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function q(e){return{alt:e.get("cover_alt").replace(/\s+/g," ").trim(),title:e.get("name-manga").replace(/\s+/g," ").trim(),author:e.get("name-author").replace(/\s+/g," ").trim(),summary:e.get("manga-summary").replace(/\s+/g," ").trim()}}function C(e){return{title:(e.get("find-name-manga")||"").replace(/\s+/g," ").trim(),author:(e.get("find-author")||"").replace(/\s+/g," ").trim()}}function b(e){const{id:a,cover1x:t,cover2x:n,title:r,alt:l}=e;return`<li class="manga-item" data-id=${a}>
  <div class="manga">
    <a href="./pages/manga-deteils/manga-template.html?id=${a}">
      <img
        class="manga-img"
        src="${t}"
        srcset="${t} 1x, ${n} 2x"
        width="180"
        height="257"
        alt="${l}"
      />
    </a>
    <a href="./pages/manga-deteils/manga-template.html?id=${a}">
      <h2 class="title-manga">${r}</h2>
    </a>
  </div>
</li>`}function I(e){return e.map(b).join("")}function v(e){const{id:a,cover1x:t,cover2x:n,title:r,alt:l}=e;return`<li class="manga-item" data-id=${a}>
  <div class="manga">
    <a href="../../pages/manga-deteils/manga-template.html?id=${a}">
      <img
        class="manga-img"
        src="${t}"
        srcset="${t} 1x, ${n} 2x"
        width="180"
        height="257"
        alt="${l}"
      />
    </a>
    <a href="../../pages/manga-deteils/manga-template.html?id=${a}">
      <h2 class="title-manga">${r}</h2>
    </a>
  </div>
</li>`}function _(e){return e.map(v).join("")}function f(e){const{id:a,cover1x:t,cover2x:n,title:r,alt:l}=e;return`<li class="manga-itemPanel">
              <img
                class="img-manga-panel"
                src="${t}"
                srcset="${t} 1x, ${n} 2x"
                alt="${l}"
                width="180"
                height="257"
              />
              <h2 class="title-manga-panel">${r}</h2>
              <div class="wrap-btns">
                <button class="btn-manga showMore" type="button" data-id="${a}">SHOW MORE</button>
                <button class="btn-manga change" type="button" data-id="${a}">CHANGE</button>
                <button class="btn-manga delete" type="button" data-id="${a}">DELETE</button>
              </div>
            </li>`}function F(e){return e.map(f).join("")}const O=[{value:"action",label:"Action"},{value:"adventure",label:"Adventure"},{value:"comedy",label:"Comedy"},{value:"crime",label:"Crime"},{value:"drama",label:"Drama"},{value:"fantasy",label:"Fantasy"},{value:"gossip",label:"Gossip"},{value:"historical",label:"Historical"},{value:"horror",label:"Horror"},{value:"isekai",label:"Isekai"},{value:"josei",label:"Josei"},{value:"magic",label:"Magic"},{value:"mature",label:"Mature"},{value:"mystery",label:"Mystery"},{value:"psychological",label:"Psychological"},{value:"romance",label:"Romance"},{value:"school_life",label:"School Life"},{value:"sci-fi",label:"Sci-Fi"},{value:"seinen",label:"Seinen"},{value:"shoujo",label:"Shoujo"},{value:"shounen",label:"Shounen"},{value:"slice_of_life",label:"Slice of Life"},{value:"sports",label:"Sports"},{value:"supernatural",label:"Supernatural"},{value:"thriller",label:"Thriller"},{value:"tragedy",label:"Tragedy"}];function y(e){const{value:a,label:t}=e;return`<label class="genreManga">
  <input type="checkbox" name="manga_genres" value="${a}" class="genre-checkbox" />
  <span class="name_genre">${t}</span>
</label>`}function A(e){return e.map(y).join("")}function N(){document.addEventListener("click",e=>{const a=e.target.closest(".js-genres-select");if(a){a.nextElementSibling.classList.toggle("is-open");return}e.target.closest(".custom-multi-select")||document.querySelectorAll(".js-elems-list.is-open").forEach(t=>{t.classList.remove("is-open")})})}function $(e){const{cover1x:a,cover2x:t,alt:n,title:r,id:l}=e,m="/Future-manga/";return`<li class="item-header">
            <a href="${m}pages/manga-deteils/manga-template.html?id=${l}">
              <img
               class="img-manga-header"
                src="${a}"
                srcset="${a} 1x, ${t} 2x"
                alt="${n}"
                width="180"
                height="257"
              />
            </a>
            <a href="${m}pages/manga-deteils/manga-template.html?id=${l}">
              <h2 class="header-search-title">${r}</h2>
            </a>
          </li>`}function E(e){return e.map($).join("")}const d=document.querySelector(".wrap-loader"),c=document.querySelector(".geolocatio");function P(){d&&d.classList.add("hidden")}function R(){c&&c.classList.add("hidden")}function U(){c&&c.classList.remove("hidden")}function w(e){const{id:a,cover1x:t,cover2x:n,title:r,alt:l}=e;return`<li class="carditem">
              <img
                class="img-card"
                src="${t}"
                srcset="${t} 1x, ${n} 2x"
                alt="${l}"
                width="180"
                height="257"
              />
              <h2 class="name-manga">${r}</h2>
              <div class="wrap-btns">
                <button class="btn-manga showMore" type="button" data-id="${a}">SHOW MORE</button>
                <button class="btn-manga delete" type="button" data-id="${a}">DELETE</button>
              </div>
            </li>`}function B(e){return e.map(w).join("")}const L="/Future-manga/",s={inputHeader:document.querySelector(".jsHeaderSearch"),listElems:document.querySelector(".js-list-search"),btnSearch:document.querySelector(".btn-search")};let g=[];document.addEventListener("DOMContentLoaded",async()=>{try{g=await h()}catch(e){p.error({title:"Error",message:`Oppps, ${e}`})}});s.inputHeader.addEventListener("input",e=>{const a=e.target.value.trim().toLowerCase();if(a.length<2){s.listElems.innerHTML="",s.listElems.style.display="none";return}const t=g.filter(n=>n.title.toLowerCase().includes(a));if(t.length===0)s.listElems.innerHTML='<li class="no-results">Mangas not found</li>',s.listElems.style.display="block";else{const n=t.slice(0,5);s.listElems.innerHTML=E(n),s.listElems.style.display="block"}});document.addEventListener("click",e=>{!s.inputHeader.contains(e.target)&&!s.listElems.contains(e.target)&&(s.listElems.style.display="none")});s.btnSearch.addEventListener("click",e=>{const a=s.inputHeader.value.trim();a&&(window.location.href=`${L}pages/manga-deteils/manga-template.html?title=${a}`)});s.inputHeader.addEventListener("keypress",e=>{e.key==="Enter"&&(e.preventDefault(),s.btnSearch.click())});export{M as a,A as b,_ as c,N as d,O as e,B as f,h as g,R as h,P as i,U as j,F as k,q as l,I as m,S as n,f as o,H as p,D as q,T as r,C as s,j as t,k as u};
//# sourceMappingURL=search-header-BB0Y-Q7a.js.map
