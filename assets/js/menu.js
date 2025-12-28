(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-menu]'),
  };

  if (refs.openModalBtn) refs.openModalBtn.addEventListener('click', toggleModal);
  if (refs.closeModalBtn) refs.closeModalBtn.addEventListener('click', toggleModal);

  function preventTouch(e) {
    e.preventDefault();
  }

  function lockBodyScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    document.documentElement.dataset.scrollY = scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('is-open');
    document.addEventListener('touchmove', preventTouch, { passive: false });
  }

  function unlockBodyScroll() {
    document.body.classList.remove('is-open');
    document.removeEventListener('touchmove', preventTouch);
    const stored = document.documentElement.dataset.scrollY;
    const scrollY = stored ? Number(stored) : 0;
    document.body.style.top = '';
    delete document.documentElement.dataset.scrollY;
    window.scrollTo(0, scrollY);
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    if (refs.modal.classList.contains('is-open')) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
  }
})();
