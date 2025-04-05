document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.gallery-filters button');
  const items = document.querySelectorAll('.art-piece');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      items.forEach((item) => {
        const categories = item.getAttribute('data-category');
        
        if (filter === 'all' || categories.includes(filter)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
