let card = document.querySelectorAll(".slider-card")
let circle = document.querySelectorAll(".circle")

let i = 0;

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



var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    // freeMode:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });