// Карточки для фитнеса

let btn = document.querySelector(".details");

let card = document.querySelector(".front-side");

let btnBack = document.querySelector(".back");

let productCardBack = document.querySelector(".back-side");


btn.addEventListener("click", function(){
  card.classList.toggle("active");
  productCardBack.classList.toggle("active");
})



btnBack.addEventListener("click", function(){
  card.classList.toggle("active");
  productCardBack.classList.toggle("active");
})