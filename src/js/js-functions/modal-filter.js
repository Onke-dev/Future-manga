import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', toggleModal);
  }

  // ==========================================
  // 2. ЛОГИКА СМЕНЫ ТЕМ И СОХРАНЕНИЯ
  // ==========================================

  const themeButtons = document.querySelectorAll('[data-theme]');

  function applyTheme(themeName) {
    try {
      document.body.classList.remove('theme-contrast');

      if (themeName !== 'default') {
        document.body.classList.add(`theme-${themeName}`);
      }

      // Саме тут може статися збій, якщо браузер блокує пам'ять
      localStorage.setItem('siteTheme', themeName);
    } catch (error) {
      console.error('Theme save error:', error);
      iziToast.error({
        title: 'Error',
        message:
          'We were unable to save your settings. Please check your browser permissions.',
        position: 'topRight',
      });
    }
  }

  // Завантаження теми при старті
  try {
    const savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  } catch (error) {
    console.error('Theme load error:', error);
  }

  // Обробка кліку по кнопках теми
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      try {
        const selectedTheme = btn.getAttribute('data-theme');

        // 1. Применяем выбранную тему
        applyTheme(selectedTheme);

        // 2. Закрываем саму модалку фильтра
        toggleModal();

        // 3. УМНОЕ ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ
        const mobMenu = document.querySelector('[data-menu]');
        const closeMenuBtn = document.querySelector('[data-menu-close]');

        if (mobMenu && mobMenu.classList.contains('is-open') && closeMenuBtn) {
          closeMenuBtn.click();
        }
      } catch (error) {
        console.error('Filter click error:', error);
        iziToast.error({
          title: 'Error',
          message: 'An error occurred when applying the filter.',
          position: 'topRight',
        });
      }
    });
  });
});
