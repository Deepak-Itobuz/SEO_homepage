let card = document.querySelectorAll(".slider-card")
let circle = document.querySelectorAll(".circle")
let price = document.querySelectorAll(".plans")

// let i = 0;

// setInterval(() => {
//     if (i < card.length - 1) {
//         card[i].classList.remove("current-card")
//         circle[i].classList.remove("activated")
//         i++
//         card[i].classList.add("current-card")
//         circle[i].classList.add("activated")
//     }
//     else {
//         card[i].classList.remove("current-card")
//         circle[i].classList.remove("activated")
//         i = 0
//         card[i].classList.add("current-card")
//         circle[i].classList.add("activated")
//     }
// }, 1500)

price.forEach ((ele) => {
  ele.addEventListener("mouseover", () =>{
   ele.firstElementChild.firstElementChild.style.color= "white";
   ele.lastElementChild.style.backgroundColor= "#FAD725";
  } )
} ) 
price.forEach ((ele) => {
  ele.addEventListener("mouseout", () =>{
   ele.firstElementChild.firstElementChild.style.color= "#6f77f1";
   ele.lastElementChild.style.backgroundColor= "white";
  } )
} ) 


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     centeredSlides: true,
//     spaceBetween: 30,
//     grabCursor: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//     // freeMode:true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    650: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
})