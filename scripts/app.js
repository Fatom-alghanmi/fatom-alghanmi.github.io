document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const images = [
    'assets/header.png',
    'assets/header2.png',
    'assets/header3.png',
    'assets/header4.png'
  ];
  let index = 0;

  setInterval(() => {
      const nextIndex = (index + 1) % images.length;
      const fadeImg = document.createElement('div');
      fadeImg.style.backgroundImage = `url('${images[nextIndex]}')`;
      fadeImg.style.position = 'absolute';
      fadeImg.style.top = '0';
      fadeImg.style.left = '0';
      fadeImg.style.width = '100%';
      fadeImg.style.height = '100%';
      fadeImg.style.backgroundSize = 'cover';
      fadeImg.style.backgroundPosition = 'center';
      fadeImg.style.backgroundRepeat = 'no-repeat';
      fadeImg.style.opacity = '0';
      fadeImg.style.transition = 'opacity 1s ease';
      header.appendChild(fadeImg);

      requestAnimationFrame(() => {
          fadeImg.style.opacity = '1';
      });

      setTimeout(() => {
          header.style.backgroundImage = `url('${images[nextIndex]}')`;
          header.removeChild(fadeImg);
      }, 1000);

      index = nextIndex;
  }, 5000);
});
