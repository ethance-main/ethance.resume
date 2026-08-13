document.querySelectorAll('.project-banner details').forEach((details) => {
  const content = details.querySelector('.banner-content');

  details.addEventListener('toggle', () => {
    if (details.open) {
      content.style.height = '0px';
      content.offsetHeight; // force the browser to flush/reflow right now
      content.style.height = content.scrollHeight + 'px';
    } else {
      content.style.height = '0px';
    }
  });
});