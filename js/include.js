document.addEventListener("DOMContentLoaded", function() {
  const includes = document.querySelectorAll('[data-include]');
  
  includes.forEach(el => {
    const file = el.getAttribute('data-include');
    
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => {
          console.error('Error loading partial:', file);
        });
    }
  });
});
