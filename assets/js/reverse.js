const reverseBtn = document.querySelector('.btn_reverse');
const listChapters = document.querySelector('.list-chapters');

reverseBtn.addEventListener('click', () => {
    const chapters = Array.from(listChapters.querySelectorAll('.item-chapter'));

    // 1. Сначала скрываем все элементы
    chapters.forEach(ch => ch.classList.add('is-hidden'));

    // 2. Ждем крошечную паузу, чтобы браузер успел применить класс скрытия
    setTimeout(() => {
        // 3. Переворачиваем и вставляем
        chapters.reverse();
        listChapters.append(...chapters);

        // 4. Постепенно проявляем каждую главу с небольшой задержкой (каскадом)
        chapters.forEach((ch, index) => {
            setTimeout(() => {
                ch.classList.remove('is-hidden');
            }, index * 30); // 30ms задержка между каждой главой
        });
    }, 150); // Пауза перед началом проявления
});