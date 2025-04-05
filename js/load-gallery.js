document.addEventListener('DOMContentLoaded', function() {
  const galleryGrid = document.querySelector('.gallery-grid');

  // Your image data
  const images = [
    { src: 'images/burcu_art1.png', alt: 'Art 1', categories: ['child', 'animal', 'portrait'] },
    { src: 'images/burcu_art2.png', alt: 'Art 2', categories: ['portrait', 'woman', 'flower'] },
    { src: 'images/burcu_art3.png', alt: 'Art 3', categories: ['flower', 'woman', 'portrait'] },
    { src: 'images/burcu_art4.png', alt: 'Art 4', categories: ['woman', 'flower', 'portrait', 'animal'] },
    { src: 'images/burcu_art5.png', alt: 'Art 5', categories: ['woman', 'flower', 'portrait'] },
    { src: 'images/burcu_art6.png', alt: 'Art 6', categories: ['woman', 'flower', 'portrait'] },
    { src: 'images/burcu_art7.png', alt: 'Art 7', categories: ['woman', 'flower', 'portrait'] },
    { src: 'images/burcu_art8.png', alt: 'Art 8', categories: ['woman', 'flower', 'portrait'] }
  ];

  images.forEach((image, index) => {
    const div = document.createElement('div');
    div.classList.add('art-piece');
    div.setAttribute('data-category', image.categories.join(' '));
    div.style.setProperty('--delay', `${index * 0.1}s`); // optional: add a small fade-in delay

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    const caption = document.createElement('div');
    caption.classList.add('hover-caption');
    caption.textContent = image.alt;

    div.appendChild(img);
    div.appendChild(caption);
    galleryGrid.appendChild(div);
  });
});
