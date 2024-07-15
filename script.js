// Карточки для фитнеса

/* let btn = document.querySelector(".details");

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
}) */


  let frontSideCollection = document.querySelectorAll('.front-side');

  let backSideCollection = document.querySelectorAll('.back-side');



function frontSideFlip(event) {

  
   /* console.log(frontCollection); */


   frontSideCollection.forEach((el, index) => {

    el.addEventListener('click', () => {

      event.currentTarget.classList.add("active")
 
     backSideCollection[index].classList.add("active")

    });

   

  })




} ;


function backSideFlip(event) {

  let blockCollection = document.querySelectorAll('.back-side');

  
  blockCollection.forEach((el, index) => {

    el.addEventListener('click', () => {

      backSideCollection[index].classList.remove('active');
      frontSideCollection[index].classList.remove('active')

    });

   
  })

} 