// 1. Наші дані про мангу
const mangaList = [
    {
        title: "Solo Leveling",
        img1x: "/Home/images/manga/solo-leveling-1x.jpg",
        img2x: "/Home/images/manga/solo-leveling-2x.jpg",
        link: "#"
    },
    {
        title: "Second Life Ranker",
        img1x: "/Home/images/manga/second-life-ranker-1x.jpg",
        img2x: "/Home/images/manga/second-life-ranker-2x.jpg",
        link: "#"
    },
    {
        title: "The only one who returned with the maximum level",
        img1x: "/Home/images/manga/the-only-one-who-returned-with-the-maximum-level-1x.jpg",
        img2x: "/Home/images/manga/the-only-one-who-returned-with-the-maximum-level-2x.jpg",
        link: "#"
    },
    {
        title: "Naruto",
        img1x: "/Home/images/manga/naruto-1x.jpg",
        img2x: "/Home/images/manga/naruto-2x.jpg",
        link: "#"
    },
    {
        title: "The Descent of the Demonic Master",
        img1x: "/Home/images/manga/the-descent-of-the-demonic-master-1x.jpg",
        img2x: "/Home/images/manga/the-descent-of-the-demonic-master-2x.jpg",
        link: "#"
    },
    {
        title: "Sonna kazoku nara sutechaeba?",
        img1x: "/Home/images/manga/sonna-kazoku-nara-sutechaeba-1x.jpg",
        img2x: "/Home/images/manga/sonna-kazoku-nara-sutechaeba-2x.jpg",
        link: "#"
    },
    {
        title: "Agnyeoneun Marionette",
        img1x: "/Home/images/manga/agnyeoneun-marionette-1x.jpg",
        img2x: "/Home/images/manga/agnyeoneun-marionette-2x.jpg",
        link: "#"
    },
    {
        title: "The Beginning After the End",
        img1x: "/Home/images/manga/the-beginning-after-the-end-1x.jpg",
        img2x: "/Home/images/manga/the-beginning-after-the-end-2x.jpg",
        link: "#"
    },
    {
        title: "I fell in love after school",
        img1x: "/Home/images/manga/i-fell-in-love-after-school-1x.jpg",
        img2x: "/Home/images/manga/i-fell-in-love-after-school-2x.jpg",
        link: "#"
    }
    
];

// 2. Налаштування пагінації
const itemsPerPage = 9; // Скільки манги показувати на сторінці
let currentPage = 1;

const container = document.getElementById('manga-container');
const paginationContainer = document.getElementById('pagination-numbers');

// 3. Функція для відображення карток
function displayManga(page) {
    container.innerHTML = ""; // Очищуємо список
    
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = mangaList.slice(start, end);

    itemsToShow.forEach(manga => {
        const li = document.createElement('li');
        li.className = 'manga-item';
        li.innerHTML = `
            <a class="manga" href="${manga.link}">
                <img class="manga-img" src="${manga.img1x}" 
                     srcset="${manga.img1x} 1x, ${manga.img2x} 2x" 
                     width="180" height="257" alt="${manga.title}" />
                <h2 class="title-manga">${manga.title}</h2>
            </a>
        `;
        container.appendChild(li);
    });

    renderPagination();
}

// 4. Функція для створення кнопок
function renderPagination() {
    paginationContainer.innerHTML = "";
    const pageCount = Math.ceil(mangaList.length / itemsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.className = (i === currentPage) ? 'pag-btn active' : 'pag-btn';
        
        button.addEventListener('click', () => {
            currentPage = i;
            displayManga(currentPage);
            window.scrollTo(0, 0); // Прокрутка вгору при зміні сторінки
        });
        
        paginationContainer.appendChild(button);
    }
}

// Запуск при завантаженні сторінки
displayManga(currentPage);