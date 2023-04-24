// NAVBAR MENU RESPONSIVE START
let myNav = document.querySelector("#myNav");

function openNav() {
  myNav.style.display = "block";
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  myNav.style.display = "none";
  document.getElementById("myNav").style.height = "0%";
}
// NAVBAR MENU RESPONSIVE END

// carousel-card
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  lazyLoad: true,
  responsiveClass: true,
  dotsEach: true,
  dotsContainer: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 3.5,
      nav: true,
      loop: true,
      dotsData: true,
    },
  },
});
