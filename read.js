import"./assets/modal-filter-Dh90QjJ_.js";import{i as u}from"./assets/vendor-Dk5KRYwc.js";import{a as w}from"./assets/search-header-BB0Y-Q7a.js";import"./assets/header-auth-CE0rMzfT.js";const h=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{window.scrollY>500?h.classList.add("show"):h.classList.remove("show")});h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const o={chapterTitle:document.getElementById("js-chapter-title"),pagesList:document.getElementById("js-pages-list"),navigationList:document.getElementById("js-navigation-list")};document.addEventListener("DOMContentLoaded",async()=>{const g=new URLSearchParams(window.location.search),s=g.get("id"),r=g.get("chapter");if(!s||!r){u.error({title:"Error",message:"Manga ID or chapter number missing from URL!"});return}try{const e=await w(s);if(o.chapterTitle&&(o.chapterTitle.textContent=`${e.title}, Chapter ${r}`),document.title=`${e.title}, Chapter ${r}`,o.navigationList){const t=sessionStorage.getItem("cameFromCatalog")==="true";let d=`
        <li class="item-goe home">
          <a class="location" href="../../index.html" data-key="home_location">Home</a>
        </li>
      `;t&&(d+=`
          <li class="item-goe home">
            <a class="location" href="../../pages/manga/manga.html" data-key="manga">Manga</a>
          </li>
        `),d+=`
        <li class="item-goe home">
          <a class="location" href="../../pages/manga-deteils/manga-template.html?id=${s}">${e.title}</a>
        </li>
        <li class="item-goe">
          <span class="location js-breadcrumb-name">Chapter ${r}</span>
        </li>
      `,o.navigationList.innerHTML=d}const m=await fetch(`http://localhost:3000/chapters?mangaId=${s}&chapter=${r}`);if(!m.ok)throw new Error("Server request failed");const[p]=await m.json();if(!p||!p.pages)throw new Error("Chapter not found or empty!");const a=p.pages,x=a.desktop1x.length;let f="";for(let t=0;t<x;t++)f+=`
        <li class="chapter-item">
          <div class="img-chapter">
            <picture>
              <source srcset="${a.desktop1x[t]} 1x, ${a.desktop2x[t]} 2x" media="(min-width: 1440px)" />
              <source srcset="${a.tablet1x[t]} 1x, ${a.tablet2x[t]} 2x" media="(min-width: 768px)" />
              <source srcset="${a.mobile1x[t]} 1x, ${a.mobile2x[t]} 2x" media="(max-width: 767px)" />
              <img class="img-page" src="${a.mobile1x[t]}" alt="Page ${t+1}" loading="lazy" width="100%" />
            </picture>
          </div>
        </li>
      `;o.pagesList&&(o.pagesList.innerHTML=f)}catch(e){console.error("Chapter render error:",e),u.error({title:"Error",message:"Failed to load chapter pages."})}const l=document.getElementById("prev-btn"),c=document.getElementById("next-btn"),i=await(await fetch(`http://localhost:3000/chapters?mangaId=${s}`)).json();i.sort((e,m)=>e.chapter-m.chapter);const n=i.findIndex(e=>e.chapter===Number(r));if(n!==-1){if(l)if(n>0){const e=i[n-1].chapter;l.href=`?id=${s}&chapter=${e}`,l.style.display="inline-block"}else l.style.display="none";if(c)if(n<i.length-1){const e=i[n+1].chapter;c.href=`?id=${s}&chapter=${e}`,c.style.display="inline-block"}else c.style.display="none"}});
//# sourceMappingURL=read.js.map
