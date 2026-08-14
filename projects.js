document.querySelectorAll('.project-banner details').forEach((details) => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('.banner-content');

  summary.addEventListener('click', (e) => {
    e.preventDefault(); // stop the browser's native toggle behavior entirely

    if (details.open) {
      // Closing: animate down first, THEN remove the open attribute
      content.style.height = content.scrollHeight + 'px';
      content.offsetHeight; // force reflow so this starting height is registered
      content.style.height = '0px';
      details.classList.remove('is-open');

      content.addEventListener('transitionend', function handler() {
        details.open = false;
        content.removeEventListener('transitionend', handler);
      }, { once: true });
    } else {
      // Opening: set open immediately so content is visible, then animate in
      details.open = true;
      details.classList.add('is-open');
      content.style.height = '0px';
      content.offsetHeight; // force reflow
      content.style.height = content.scrollHeight + 'px';
    }
  });
});