const tabs = document.querySelectorAll('.catalog__tab'),
      catalogs = document.querySelectorAll('.catalog__items');

tabs.forEach((el, i) => el.addEventListener('click', () => {
  removeActiveClass(tabs, 'tab-active')
  // i.classList('tab-active')
  el.classList.add('tab-active')

  catalogs.forEach((elem, idx) => {
    removeActiveClass(catalogs, 'catalog__items-active')
    catalogs[i].classList.add('catalog__items-active')
  })
}))

function removeActiveClass(selectors, removeClass){
  selectors.forEach(el => el.classList.remove(removeClass))
}