document.addEventListener("DOMContentLoaded", () => {
  const openModal = document.querySelectorAll("[data-backdrop-open]");
  const closeModal = document.querySelector("[data-modal-close]");
  const modal = document.querySelector(".backdrop");

  function toggleModal() {
    modal.classList.toggle("is-visible");
  }
  openModal.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  if (closeModal) {
    closeModal.addEventListener("click", toggleModal);
  }

  function applyTheme(themeName) {
    // Сначала удаляем ВСЕ классы тем, чтобы они не наслаивались друг на друга
    document.body.classList.remove(
      "theme-deuteranopia",
      "theme-protanopia",
      "theme-tritanopia",
    );

    // Если выбрано не 'default', то добавляем класс нужной темы к body
    if (themeName !== "default") {
      document.body.classList.add(`theme-${themeName}`);
    }

    // Сохраняем выбор в локальную память браузера
    localStorage.setItem("siteTheme", themeName);
  }

  // При загрузке страницы проверяем, сохранял ли пользователь тему раньше
  const savedTheme = localStorage.getItem("siteTheme");
  if (savedTheme) {
    // Если да, сразу применяем её
    applyTheme(savedTheme);
  }

  // Вешаем слушатель клика на каждую кнопку темы
  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Считываем название темы из атрибута data-theme той кнопки, на которую нажали
      const selectedTheme = btn.getAttribute("data-theme");

      // Запускаем функцию смены темы
      applyTheme(selectedTheme);

      // Автоматически закрываем окошко после выбора (очень удобно для пользователя!)
      toggleModal();
    });
  });
});
