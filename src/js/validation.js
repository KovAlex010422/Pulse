document.addEventListener('DOMContentLoaded', function(){
  const formInputs = document.querySelectorAll('.input'),
        formSubmit = document.querySelectorAll('.feed-form'),
        formName = document.querySelectorAll('[data-form=name]'),
        formPhone = document.querySelectorAll('[data-form=phone]'),
        formEmail = document.querySelectorAll('[data-form=email]'),
        inputLabel = document.createElement('label');

  formSubmit.forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
  }))
    for(let input of formSubmit[1].elements){
      input.addEventListener('blur', it => {
        errorInput(it);
      })
    }

    function errorInput(input){
      let inputVal = input.srcElement.value.trim();
      let inputBorderStyle = input.srcElement.style.border = '';
      if(inputVal.length <= 1) {
        input.srcElement.style.border = '1px solid red';
        console.log(inputBorderStyle);
      } else {
        input.srcElement.style.border = '1px solid green';
        console.log(inputBorderStyle);

      }
    }

})