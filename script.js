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


  let frontCollection = document.querySelectorAll('.front-side');

  let backCollection = document.querySelectorAll('.back-side');



function frontSideFlip(event) {

  
   /* console.log(frontCollection); */


   frontCollection.forEach((el, index) => {

    el.addEventListener('click', () => {

      event.currentTarget.classList.toggle("active")
 
     backCollection[index].classList.add("active")

    });

   

  })




} ;


function backSideFlip(event) {

  let blockCollection = document.querySelectorAll('.back-side');

  
  blockCollection.forEach((el, index) => {

    el.addEventListener('click', () => {

      backCollection[index].classList.remove('active');
      frontCollection[index].classList.remove('active')

    });

   
  })

} 