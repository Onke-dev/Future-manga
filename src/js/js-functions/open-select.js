document.addEventListener('DOMContentLoaded', () => {
  const selectTriger = document.querySelector('.custom-select #genres-select');
  const customSelect = document.getElementById('genres-select');

  selectTriger.addEventListener('click', () => {
    genresSelect.classList.toggle('open');
  });

  document.addEventListener('click', function (event) {
    // Проверяем: если клик был НЕ внутри нашего customSelect
    if (!customSelect.contains(event.target)) {
      // То принудительно забираем класс 'open' (прячем меню)
      customSelect.classList.remove('open');
    }
  });
});
