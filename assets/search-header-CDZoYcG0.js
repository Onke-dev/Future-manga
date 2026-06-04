import{a as o,i as h}from"./vendor-B0Mi87ju.js";const i="http://localhost:3000";async function b(){try{return(await o.get(`${i}/mangas`)).data}catch(a){return console.error("Error loading manga database:",a),[]}}async function x(a){try{return(await o.get(`${i}/mangas/${a}`)).data}catch(e){return console.error(`Error loading manga with ID ${a}:`,e),null}}async function T(a){try{return(await o.post(`${i}/mangas`,a)).data}catch(e){console.error("Error adding new manga to database:",e)}}async function S(a){try{return(await o.delete(`${i}/mangas/${a}`)).data}catch(e){console.error("Error deleting manga from database:",e)}}async function j(a,e){try{return(await o.patch(`${i}/mangas/${a}`,e)).data}catch(t){console.error("Error updating manga in database:",t)}}async function k(a){const e="b4c2e2dd57a22e0b112660df85c660bb",t=new FormData;t.append("image",a),t.append("key",e);try{return(await o.post("https://api.imgbb.com/1/upload",t)).data.data.url}catch(n){throw console.error("Error uploading image to ImgBB:",n),n}}const d={modalChange:document.querySelector(".modalChangeManga")};function D(){d.modalChange.classList.add("is-open"),document.body.classList.add("no-scroll")}function H(){d.modalChange.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function C(a){return{alt:a.get("cover_alt").replace(/\s+/g," ").trim(),title:a.get("name-manga").replace(/\s+/g," ").trim(),author:a.get("name-author").replace(/\s+/g," ").trim(),summary:a.get("manga-summary").replace(/\s+/g," ").trim()}}function q(a){return{title:(a.get("find-name-manga")||"").replace(/\s+/g," ").trim(),author:(a.get("find-author")||"").replace(/\s+/g," ").trim()}}function v(a){const{id:e,cover1x:t,cover2x:n,title:l,alt:s}=a;return`<li class="manga-item" data-id=${e}>
  <div class="manga">
    <a href="./pages/manga-deteils/manga-template.html?id=${e}">
      <img
        class="manga-img"
        src="${t}"
        srcset="${t} 1x, ${n} 2x"
        width="180"
        height="257"
        alt="${s}"
      />
    </a>
    <a href="./pages/manga-deteils/manga-template.html?id=${e}">
      <h2 class="title-manga">${l}</h2>
    </a>
  </div>
</li>`}function I(a){return a.map(v).join("")}function f(a){const{id:e,cover1x:t,cover2x:n,title:l,alt:s}=a;return`<li class="manga-item" data-id=${e}>
  <div class="manga">
    <a href="../../pages/manga-deteils/manga-template.html?id=${e}">
      <img
        class="manga-img"
        src="${t}"
        srcset="${t} 1x, ${n} 2x"
        width="180"
        height="257"
        alt="${s}"
      />
    </a>
    <a href="../../pages/manga-deteils/manga-template.html?id=${e}">
      <h2 class="title-manga">${l}</h2>
    </a>
  </div>
</li>`}function A(a){return a.map(f).join("")}function y(a){const{id:e,cover1x:t,cover2x:n,title:l,alt:s}=a;return`<li class="manga-itemPanel">
              <img
                class="img-manga-panel"
                src="${t}"
                srcset="${t} 1x, ${n} 2x"
                alt="${s}"
                width="180"
                height="257"
              />
              <h2 class="title-manga-panel">${l}</h2>
              <div class="wrap-btns">
                <button class="btn-manga showMore" type="button" data-id="${e}">SHOW MORE</button>
                <button class="btn-manga change" type="button" data-id="${e}">CHANGE</button>
                <button class="btn-manga delete" type="button" data-id="${e}">DELETE</button>
              </div>
            </li>`}function _(a){return a.map(y).join("")}const O=[{value:"action",label:"Action"},{value:"adventure",label:"Adventure"},{value:"comedy",label:"Comedy"},{value:"crime",label:"Crime"},{value:"drama",label:"Drama"},{value:"fantasy",label:"Fantasy"},{value:"gossip",label:"Gossip"},{value:"historical",label:"Historical"},{value:"horror",label:"Horror"},{value:"isekai",label:"Isekai"},{value:"josei",label:"Josei"},{value:"magic",label:"Magic"},{value:"mature",label:"Mature"},{value:"mystery",label:"Mystery"},{value:"psychological",label:"Psychological"},{value:"romance",label:"Romance"},{value:"school_life",label:"School Life"},{value:"sci-fi",label:"Sci-Fi"},{value:"seinen",label:"Seinen"},{value:"shoujo",label:"Shoujo"},{value:"shounen",label:"Shounen"},{value:"slice_of_life",label:"Slice of Life"},{value:"sports",label:"Sports"},{value:"supernatural",label:"Supernatural"},{value:"thriller",label:"Thriller"},{value:"tragedy",label:"Tragedy"}];function $(a){const{value:e,label:t}=a;return`<label class="genreManga">
  <input type="checkbox" name="manga_genres" value="${e}" class="genre-checkbox" />
  <span class="name_genre">${t}</span>
</label>`}function F(a){return a.map($).join("")}function N(){document.addEventListener("click",a=>{const e=a.target.closest(".js-genres-select");if(e){e.nextElementSibling.classList.toggle("is-open");return}a.target.closest(".custom-multi-select")||document.querySelectorAll(".js-elems-list.is-open").forEach(t=>{t.classList.remove("is-open")})})}function w(a){const{cover1x:e,cover2x:t,alt:n,title:l,id:s}=a,r="/Future-manga/";return`<li class="item-header">
            <a href="${r}pages/manga-deteils/manga-template.html?id=${s}">
              <img
               class="img-manga-header"
                src="${e}"
                srcset="${e} 1x, ${t} 2x"
                alt="${n}"
                width="180"
                height="257"
              />
            </a>
            <a href="${r}pages/manga-deteils/manga-template.html?id=${s}">
              <h2 class="header-search-title">${l}</h2>
            </a>
          </li>`}function E(a){return a.map(w).join("")}const m=document.querySelector(".wrap-loader"),c=document.querySelector(".geolocatio");function P(){m&&m.classList.add("hidden")}function R(){c&&c.classList.add("hidden")}function B(){c&&c.classList.remove("hidden")}function L(a){const{id:e,cover1x:t,cover2x:n,title:l,alt:s}=a;return`<li class="carditem">
              <img
                class="img-card"
                src="${t}"
                srcset="${t} 1x, ${n} 2x"
                alt="${s}"
                width="180"
                height="257"
              />
              <h2 class="name-manga">${l}</h2>
              <div class="wrap-btns">
                <button class="btn-manga showMore" type="button" data-id="${e}">SHOW MORE</button>
                <button class="btn-manga delete" type="button" data-id="${e}">DELETE</button>
              </div>
            </li>`}function G(a){return a.map(L).join("")}const u=document.querySelectorAll(".jsHeaderSearch"),g=document.querySelectorAll(".js-list-search");let p=[];document.addEventListener("DOMContentLoaded",async()=>{try{p=await b()}catch(a){h.error({title:"Error",message:`Oppps, ${a}`})}});u.forEach((a,e)=>{const t=g[e];a.addEventListener("input",n=>{const l=n.target.value.trim().toLowerCase();if(l.length<2){t.innerHTML="",t.style.display="none";return}const s=p.filter(r=>r.title.toLowerCase().includes(l));if(s.length===0)t.innerHTML='<li class="no-results">Mangas not found</li>',t.style.display="block";else{const r=s.slice(0,5);t.innerHTML=E(r),t.style.display="block"}})});document.addEventListener("click",a=>{u.forEach((e,t)=>{const n=g[t];!e.contains(a.target)&&!n.contains(a.target)&&(n.innerHTML="",n.style.display="none",e.value="")})});export{x as a,F as b,A as c,N as d,O as e,G as f,b as g,R as h,P as i,B as j,_ as k,C as l,I as m,T as n,y as o,j as p,H as q,S as r,q as s,D as t,k as u};
//# sourceMappingURL=search-header-CDZoYcG0.js.map
