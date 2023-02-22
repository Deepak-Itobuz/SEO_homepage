let card = document.querySelectorAll(".slider-card")
let circle = document.querySelectorAll(".circle")
let price = document.querySelectorAll(".plans")
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");

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

searchBtn.addEventListener("click",()=>{
if(searchBar.classList.contains("hide")){
  searchBar.classList.remove('hide');
}
else
{
  searchBar.classList.add('hide');

}


})