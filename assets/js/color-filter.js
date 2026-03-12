document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. ЛОГИКА ОТКРЫТИЯ/ЗАКРЫТИЯ ОКНА
  // ==========================================

  const openModalBtns = document.querySelectorAll("[data-backdrop-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  const modal = document.querySelector(".backdrop");

  function toggleModal() {
    if (modal) {
      modal.classList.toggle("is-visible");
    }
  }

  // Вешаем клик на все кнопки с глазиком
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  // Вешаем клик на крестик в модальном окне
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", toggleModal);
  }

  // ==========================================
  // 2. ЛОГИКА СМЕНЫ ТЕМ И СОХРАНЕНИЯ
  // ==========================================

  // Находим обе кнопки: и Default, и Contrast
  const themeButtons = document.querySelectorAll("[data-theme]");

  // Главная функция применения темы
  function applyTheme(themeName) {
    // 1. Удаляем класс контраста, чтобы сбросить стили (если выбрали Default)
    document.body.classList.remove("theme-contrast");

    // 2. Если выбрали не 'default', добавляем соответствующий класс (theme-contrast)
    if (themeName !== "default") {
      document.body.classList.add(`theme-${themeName}`);
    }

    // 3. Сохраняем выбор в память браузера
    localStorage.setItem("siteTheme", themeName);
  }

  // При загрузке страницы проверяем, сохранял ли читатель настройки ранее
  const savedTheme = localStorage.getItem("siteTheme");
  if (savedTheme) {
    // Если да — сразу применяем сохраненную тему (например, при переходе на другую страницу)
    applyTheme(savedTheme);
  }

  // Вешаем слушатель клика на каждую кнопку темы
  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Считываем название темы (default или contrast) из атрибута
      const selectedTheme = btn.getAttribute("data-theme");

      // Запускаем функцию смены темы
      applyTheme(selectedTheme);

      // Автоматически закрываем окошко после выбора для удобства
      toggleModal();
    });
  });
});
