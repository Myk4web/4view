/*=============== SCROLL TO THE TOP ===============*/
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/*=============== NAV BARDROP DOWN ===============*/

function show(anything) {
  document.querySelector(".textBox").value = anything;
}

let active = document.querySelector(".active");

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

/*=============== NAV BARDROP DOWN ===============*/

/*=============== NAV BAR ===============*/

const slide = document.querySelector("header");
const sectionOne = document.querySelector(".slider");

const sectionOneOptions = {
  rootMargin: "-300px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      slide.classList.add("nav-scrolled");
    } else {
      slide.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

/*=============== SHOW MENU ===============*/

const slidercard = document.querySelectorAll(".slidercard"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < slidercard.length; i++) {
    slidercard[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > slidercard.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = slidercard.length;
  }
  slidercard[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}
/*==== LEANR THE MOVES=====*/

/*==== LEANR THE MOVES=====*/

// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     center: true,
//     navText: [
//       "<i class='fa fa-angle-left'></i>",
//       "<i class='fa fa-angle-right'></i>",
//     ],
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 1,
//       },
//       1000: {
//         items: 3,
//       },
//     },
//   });
// });

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== POPULAR SWIPER ===============*/

/*=============== MIXITUP FILTER FEATURED ===============*/

/* Link active featured */

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
