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
      index = (index + 1) % images.length;
      header.style.backgroundImage = `url('${images[index]}')`;
    }, 5000); // change every 5 seconds
  });
  