document.addEventListener('DOMContentLoaded', function(){
  const formInputs = document.querySelectorAll('.input'),
        formName = document.querySelectorAll('[form=Name]'),
        btmSubmit = document.querySelector('[modal=consultation]'),
        inputLabel = this.createElement('div');
  function ad(){
    formInputs.forEach(input => {
      if(!input.value && !input.value.trim()){
        console.log(input.value);
        input.value = '1eafaf';
        inputLabel.textContent=' Введи дані';
        input.append(inputLabel)}
      })
  }
  ad()
})