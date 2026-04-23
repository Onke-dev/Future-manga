document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. ЛОГИКА ОТКРЫТИЯ/ЗАКРЫТИЯ ОКНА ФИЛЬТРА
  // ==========================================

  const openModalBtns = document.querySelectorAll('[data-backdrop-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('.backdrop');

  function toggleModal() {
    if (modal) {
      modal.classList.toggle('is-visible');
    }
  }

  // Вешаем клик на все кнопки с глазиком
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  // Вешаем клик на крестик в модальном окне
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', toggleModal);
  }

  // ==========================================
  // 2. ЛОГИКА СМЕНЫ ТЕМ И СОХРАНЕНИЯ
  // ==========================================

  const themeButtons = document.querySelectorAll('[data-theme]');

  function applyTheme(themeName) {
    document.body.classList.remove('theme-contrast');

    if (themeName !== 'default') {
      document.body.classList.add(`theme-${themeName}`);
    }

    localStorage.setItem('siteTheme', themeName);
  }

  const savedTheme = localStorage.getItem('siteTheme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTheme = btn.getAttribute('data-theme');

      // 1. Применяем выбранную тему
      applyTheme(selectedTheme);

      // 2. Закрываем саму модалку фильтра
      toggleModal();

      // 3. УМНОЕ ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ
      // Ищем меню и его кнопку-крестик
      const mobMenu = document.querySelector('[data-menu]');
      const closeMenuBtn = document.querySelector('[data-menu-close]');

      // Если мы на мобилке, меню существует И оно сейчас открыто
      if (mobMenu && mobMenu.classList.contains('is-open') && closeMenuBtn) {
        // Виртуально "нажимаем" на крестик мобильного меню
        closeMenuBtn.click();
      }
    });
  });
});
