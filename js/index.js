// NAVBAR MENU RESPONSIVE START
let myNav = document.querySelector("#myNav");
let aREsponsiveElement = document.querySelectorAll(".overlay-content__link");

function openNav() {
  myNav.style.display = "block";
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  myNav.style.display = "none";
  document.getElementById("myNav").style.height = "0%";
}
aREsponsiveElement.forEach((item) => {
  item.addEventListener("click", () => {
    myNav.style.display = "none";
    document.getElementById("myNav").style.height = "0%";
  });
});
// NAVBAR MENU RESPONSIVE END

// WINDOW SCROLL  FIXED MENU
window.onscroll = function () {
  setSticky();
};
var header = document.querySelector(".fixed_top");
var sticky = header.offsetTop;
function setSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// WINDOW SCROLL  FIXED MENU
// carousel-card
$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  margin: 30,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsiveClass: true,
  center: true,
  dots: true,
  responsive: {
    0: {
      items: 1.5,
      dots: true,
      nav: false,
    },
    0: {
      items: 1.1,
      dots: true,
      nav: false,
    },
    600: {
      items: 2,
      dots: true,
      nav: false,
      dotsEach: true,
      dotsData: true,
    },
    1000: {
      items: 3,
      dots: true,
      margin: 50,
      nav: false,
    },
  },
});
