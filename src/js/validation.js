document.addEventListener('DOMContentLoaded', function(){
  const formInputs = document.querySelectorAll('.input'),
        formName = document.querySelectorAll('[data-form=name]'),
        formPhone = document.querySelectorAll('[data-form=phone]'),
        formEmail = document.querySelectorAll('[data-form=email]'),
        formSubmit = document.querySelectorAll('.feed-form'),
        inputLabel = document.createElement('label');



  function formSubmitFunc(forms){
    console.log(forms);
    forms.forEach(form => form.addEventListener('submit', e => {
      e.preventDefault();

      for(let elem of form.elements) {
        if(elem.dataset.form) {
          if(elem.value) {
            console.log(elem.value)
          }
        }
      }
    }));

  }

  formSubmitFunc(formSubmit)
})