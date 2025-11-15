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
  
  //========= menu bar ==========//
$(document).ready(function() {
  let menuOpen = false;

  function toggleMenu() {
    if (!menuOpen) {
      $("#hamburger").addClass("open");
      $("nav").animate({ right: 0 }, 420, "swing");
    } else {
      $("#hamburger").removeClass("open");
      $("nav").animate({ right: "-250px" }, 420, "swing");
    }
    menuOpen = !menuOpen;
  }

  $("#hamburger").on("click", function() {
    toggleMenu();
  });

  $("nav a").on("click", function() {
    toggleMenu();
  });
});