document.addEventListener("DOMContentLoaded", () => {
    const mangaList = [
        {
            key: "manga-1-title",
            title: "Solo Leveling",
            img1x: "./assets/image/covers/solo-leveling-1x.jpg",
            img2x: "./assets/image/covers/solo-leveling-2x.jpg",
            link: "./manga/Solo-leveling/page-manga-1.html"
        },
        {
            key: "manga-2-title",
            title: "Second Life Ranker",
            img1x: "./assets/image/covers/second-life-ranker-1x.jpg",
            img2x: "./assets/image/covers/second-life-ranker-2x.jpg",
            link: "#"
        },
        {
            key: "manga-3-title",
            title: "The only one who returned with the maximum level",
            img1x: "./assets/image/covers/the-only-one-who-returned-with-the-maximum-level-1x.jpg",
            img2x: "./assets/image/covers/the-only-one-who-returned-with-the-maximum-level-2x.jpg",
            link: "#"
        },
        {
            key: "manga-4-title",
            title: "Naruto",
            img1x: "./assets/image/covers/naruto-1x.jpg",
            img2x: "./assets/image/covers/naruto-2x.jpg",
            link: "#"
        },
        {
            key: "manga-5-title",
            title: "The Descent of the Demonic Master",
            img1x: "./assets/image/covers/the-descent-of-the-demonic-master-1x.jpg",
            img2x: "./assets/image/covers/the-descent-of-the-demonic-master-2x.jpg",
            link: "#"
        },
        {
            key: "manga-6-title",
            title: "Sonna kazoku nara sutechaeba?",
            img1x: "./assets/image/covers/sonna-kazoku-nara-sutechaeba-1x.jpg",
            img2x: "./assets/image/covers/sonna-kazoku-nara-sutechaeba-2x.jpg",
            link: "#"
        },
        {
            key: "manga-7-title",
            title: "Agnyeoneun Marionette",
            img1x: "./assets/image/covers/agnyeoneun-marionette-1x.jpg",
            img2x: "./assets/image/covers/agnyeoneun-marionette-2x.jpg",
            link: "#"
        },
        {
            key: "manga-8-title",
            title: "The Beginning After the End",
            img1x: "./assets/image/covers/the-beginning-after-the-end-1x.jpg",
            img2x: "./assets/image/covers/the-beginning-after-the-end-2x.jpg",
            link: "#"
        },
        {
            key: "manga-9-title",
            title: "I fell in love after school",
            img1x: "./assets/image/covers/i-fell-in-love-after-school-1x.jpg",
            img2x: "./assets/image/covers/i-fell-in-love-after-school-2x.jpg",
            link: "#"
        }
    ];

    let itemsPerPage = 8;
    let currentPage = 1;

    const container = document.getElementById("manga-container");
    const paginationContainer = document.getElementById("pagination-numbers");

    if (!container) return;

    function updateItemsPerPage() {
        itemsPerPage = window.innerWidth >= 1440 ? 8 : 9;
    }

    function createMangaItem(manga) {
        const li = document.createElement("li");
        li.className = "manga-item";

        const wrapper = document.createElement("div");
        wrapper.className = "manga";

        const imgLink = document.createElement("a");
        imgLink.href = manga.link;

        const img = document.createElement("img");
        img.className = "manga-img";
        img.src = manga.img1x;
        img.srcset = `${manga.img1x} 1x, ${manga.img2x} 2x`; // Виправлено синтаксис шаблона
        img.width = 180;
        img.height = 257;
        img.alt = manga.title;

        imgLink.appendChild(img);

        const titleLink = document.createElement("a");
        titleLink.href = manga.link;

        const title = document.createElement("h2");
        title.className = "title-manga";

        // ВАЖЛИВО: Додаємо ключ для перекладу
        title.setAttribute('data-key', manga.key);
        title.textContent = manga.title; // Початковий текст

        titleLink.appendChild(title);

        wrapper.append(imgLink, titleLink);
        li.appendChild(wrapper);

        return li;
    }

    function renderManga() {
        updateItemsPerPage();
        container.innerHTML = "";

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        mangaList.slice(start, end).forEach(manga => {
            container.appendChild(createMangaItem(manga));
        });

        renderPagination();

        // ВАЖЛИВО: Після створення елементів викликаємо функцію перекладу
        if (typeof changeLanguage === 'function') {
            const currentLang = localStorage.getItem('preferred-lang') || 'en';
            changeLanguage(currentLang);
        }
    }

    function renderPagination() {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = "";
        const pages = Math.ceil(mangaList.length / itemsPerPage);

        for (let i = 1; i <= pages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.className = i === currentPage ? "pag-btn active" : "pag-btn";

            btn.addEventListener("click", () => {
                currentPage = i;
                renderManga();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });

            paginationContainer.appendChild(btn);
        }
    }

    window.addEventListener("resize", renderManga);
    renderManga();
});
