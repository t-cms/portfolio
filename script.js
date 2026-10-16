const filterButtons = document.querySelectorAll('.filter');
const portfolioGroups = document.querySelectorAll('.portfolio-group');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
    portfolioGroups.forEach((group) => {
      group.hidden = group.dataset.group !== selected;
    });
  });
});
