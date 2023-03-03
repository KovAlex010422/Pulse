document.addEventListener('DOMContentLoaded', function(){
  const btnsConsult = document.querySelectorAll('[data-modal=consultation]'),
        overlay = document.querySelector('.overlay'),
        modalConsult = document.querySelector('#consultation'),
        btnsOrder = document.querySelectorAll('[data-modal=order]'),
        modalOrder = document.querySelector('#order'),
        modalClose = document.querySelectorAll('.modal__close');

  function openModal(btnsSelektor, modalWindow) {
    btnsSelektor.forEach((el, i) => el.addEventListener('click', () => {
      overlay.style.display = 'block'
      modalWindow.style.display = 'block'
  
    console.log(parentNode(btnsSelektor[i]));
    }))
  }

  openModal(btnsConsult, modalConsult);
  openModal(btnsOrder, modalOrder);


  modalClose.forEach(el => el.addEventListener('click', () => {
    overlay.style.display = 'none'
    modalConsult.style.display = 'none'
  })
  )

})


