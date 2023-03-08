document.addEventListener('DOMContentLoaded', function () {
  const formInputs = document.querySelectorAll('.input'),
    formsSubmit = document.querySelectorAll('.feed-form'),
    formName = document.querySelector('[data-form=name]'),
    formPhone = document.querySelectorAll('[data-form=phone]'),
    formEmail = document.querySelectorAll('[data-form=email]'),
    inputLabel = document.createElement('label'),
    bf = document.querySelector('.b-form'),
    bn = document.querySelector('.b-name'),
    bp = document.querySelector('.b-phone'),
    be = document.querySelector('.b-email');

  function formCheking(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
    });
    const arrInputs = inputsFilter(form);

    for (let inp of arrInputs) {
      let inpData = inp.dataset.form;
      // console.log(inp.value);
      let inTrim = inp.value.trim();
      switch (inpData) {
        case 'name':
          inputsCheking(inp, inpData, inTrim);
          break;
        case 'phone':
          inputsCheking(inp, inpData);
          break;
        case 'email':
          inputsCheking(inp, inpData);
          break;

        default:
          break;
      }
    }
  }

  function inputsCheking(input, inputData, inTrim) {
    input.addEventListener('blur', e => {
      if (input.value.length == 0 && input.value.trim().length == 0) {
        input.style.border = '1px solid red'
      } else if (inputData == 'name' && inTrim.length < 2) {
        input.style.border = '1px solid red'
        inputLabel.textContent = 'Введи дві або більше букв';
        inputLabel.style.fontSize = '16px'
        inputLabel.style.color = 'white'
        input.after(inputLabel);
      }
      else {
        input.style.border = '1px solid green'
        inputLabel.remove()
      }
    })

  }

  function inputsFilter(arr) {
    const arrInputs = [];
    for (let input of arr) {
      let inputVal = input.value;
      if (input.tagName == 'INPUT') {
        arrInputs.push(input);
      }
    }
    return arrInputs
  }

  formCheking(bf)
})