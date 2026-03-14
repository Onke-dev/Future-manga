(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),

    // 1. Находим все кнопки открытия цветового фильтра (и десктоп, и мобайл)
    colorFilterBtns: document.querySelectorAll("[data-backdrop-open]"),
  };

  if (refs.openModalBtn)
    refs.openModalBtn.addEventListener("click", toggleModal);
  if (refs.closeModalBtn)
    refs.closeModalBtn.addEventListener("click", toggleModal);

  // 2. Добавляем проверку: если кликаем на глазик, закрываем бургер-меню
  if (refs.colorFilterBtns) {
    refs.colorFilterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Если мобильное меню сейчас открыто (есть класс is-open), то закрываем его
        if (refs.modal.classList.contains("is-open")) {
          toggleModal();
        }
      });
    });
  }

  function preventTouch(e) {
    e.preventDefault();
  }

  function lockBodyScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    document.documentElement.dataset.scrollY = scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add("is-open");
    document.addEventListener("touchmove", preventTouch, { passive: false });
  }

  function unlockBodyScroll() {
    document.body.classList.remove("is-open");
    document.removeEventListener("touchmove", preventTouch);
    const stored = document.documentElement.dataset.scrollY;
    const scrollY = stored ? Number(stored) : 0;
    document.body.style.top = "";
    delete document.documentElement.dataset.scrollY;
    window.scrollTo(0, scrollY);
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    if (refs.modal.classList.contains("is-open")) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
  }
})();
