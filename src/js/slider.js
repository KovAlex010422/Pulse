const prevArrow = document.querySelector('.arrowL'),
      nextArrow = document.querySelector('.arrowR'),
      slides = document.querySelectorAll('.slider__slide');
let slideIndex = 1;
showSlide(slideIndex);

function showSlide(n){
  if(n > slides.length){
    slideIndex = 1;
  }

  if(n < 1){
    slideIndex = slides.length;
  }

  slides.forEach(el => el.style.display = 'none');

  slides[slideIndex - 1].style.display = 'block';
}

function plusSlide(n){
  showSlide(slideIndex += n)
}
prevArrow.addEventListener('click', ()=>
  plusSlide(-1)
);

nextArrow.addEventListener('click', ()=>
  plusSlide(1)
);