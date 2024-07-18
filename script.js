// Карточки для фитнеса

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