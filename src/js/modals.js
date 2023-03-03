document.addEventListener('DOMContentLoaded', function(){
  const btnsConsult = document.querySelectorAll('[data-modal=consultation]'),
        overlay = document.querySelector('.overlay'),
        modalConsult = document.querySelector('#consultation'),
        btnsOrder = document.querySelectorAll('[data-modal=order]'),
        modalOrder = document.querySelector('#order'),
        modalClose = document.querySelectorAll('.modal__close'),
        itemDescr = document.querySelectorAll(".catalog-item__subheader"),
        modalOrderDescr = document.querySelector("#order .modal__descr");

  function openModal(btnsSelektor, modalWindow) {
    btnsSelektor.forEach((el, i) => el.addEventListener('click', () => {
      overlay.style.display = 'block';
      modalWindow.style.display = 'block';
      modalOrderDescr.textContent = itemDescr[i].textContent;
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


