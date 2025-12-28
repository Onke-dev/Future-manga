const translations = {
    'en': {
        'home': 'Home',
        'manga': 'Manga',
        'about': 'About us',
        'paragraph': 'Enjoy reading manga and manhwa for free.',
        'search-placeholder': 'Search',
        'manga-1-title': 'Solo Leveling',
        'manga-2-title': 'Second Life Ranker',
        'manga-3-title': 'The only one who returned with the maximum level',
        'manga-4-title': 'Naruto',
        'manga-5-title': 'The Descent of the Demonic Master',
        'manga-6-title': 'Sonna kazoku nara sutechaeba?',
        'manga-7-title': 'Agnyeoneun Marionette',
        'manga-8-title': 'The Beginning After the End',
        'manga-9-title': 'I fell in love after school',
        'paragraph': 'Enjoy reading manga and manhwa for free.',
        'social-media': 'Social media',
        'account': 'Account',
        'visual-impairments': 'For people with visual impairments',


        

    },
    'ua': {
        'home': 'Головна',
        'manga': 'Манґа',
        'about': 'Про нас',
        'search-placeholder': 'Пошук',
        'manga-1-title': 'Підняття рівня наодинці',
        'manga-2-title': 'Ранкер другого життя',
        'manga-3-title': 'Єдиний, хто повернувся з максимальним рівнем',
        'manga-4-title': 'Наруто',
        'manga-5-title': 'Сходження демонічного майстра',
        'manga-6-title': 'Якщо це така сімʼя, то краще її покинути?',
        'manga-7-title': 'Маріонетка лиходійки',
        'manga-8-title': 'Початок після кінця',
        'manga-9-title': 'Я закохався після школи',
        'paragraph': 'Насолоджуйтесь читанням манґи та манхви безкоштовно.',
        'social-media': 'Соціальні мережі',
        'account': 'Особистий кабінет',
        'visual-impairments': 'Для людей з порушеннями зору',
        
    }
};

// 1. Знаходимо ВСІ селекти (і для ПК, і для мобілки)
const langSelects = document.querySelectorAll('.lg_func');

// 2. Вішаємо обробник подій на кожен знайдений селект
langSelects.forEach(select => {
    select.addEventListener('change', (event) => {
        const selectedLang = event.target.value;

        // Оновлюємо значення в усіх інших селектах на сторінці, щоб вони були однакові
        langSelects.forEach(s => s.value = selectedLang);

        changeLanguage(selectedLang);
    });
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = translations[lang] ? translations[lang][key] : null;

        if (translation) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translation;
            } else {
                element.innerText = translation;
            }
        }
    });

    localStorage.setItem('preferred-lang', lang);
}

// При завантаженні сторінки встановлюємо мову для ВСІХ селектів
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';

    langSelects.forEach(select => {
        select.value = savedLang;
    });

    changeLanguage(savedLang);
});