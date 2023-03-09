document.addEventListener('DOMContentLoaded', function () {
  const formInputs = document.querySelectorAll('.input'),
    forms = document.querySelectorAll('.feed-form'),
    formName = document.querySelector('[data-form=name]'),
    formPhone = document.querySelectorAll('[data-form=phone]'),
    formEmail = document.querySelectorAll('[data-form=email]'),
    label = document.createElement('label'),
    bf = document.querySelector('.b-form'),
    bn = document.querySelector('.b-name'),
    bp = document.querySelector('.b-phone'),
    be = document.querySelector('.b-email');

    bf.addEventListener('submit', e => {
      e.preventDefault()
      }
    )

  function chekData(name, phone, email){
    name.addEventListener('change', e => {
      let nameVal = e.target.value;

      if (nameVal.length < 2){
        label.textContent = 'type name whith more 2 char';
        label.classList.add('labelErr')
        name.after(label)
        name.classList.add('inputErr')
      } else {
        label.remove();
        name.classList.remove('inputErr')
        name.classList.add('inputCor')
        return true
      }
    })
    phone.addEventListener('change', e => {
      let regEx = /^\d{5}$/;
      let phoneVal = e.target.value;
      console.log(phoneVal);
    
      if(!regEx.test(phoneVal)) {
        label.textContent = 'введи тел номер (5 цифр)';
        label.classList.add('labelErr')
        phone.after(label)
        phone.classList.add('inputErr')
      } else {
        label.remove();
        phone.classList.remove('inputErr')
        phone.classList.add('inputCor')
        return true
      }
    })
  }

  chekData(bn, bp, be)














  // function formCheking(form) {
  //   form.addEventListener('submit', e => {

  //     e.preventDefault();
  //   });
    
  //   const arrInputs = inputsFilter(form);

  //   for (let inp of arrInputs) {
  //     let inpData = inp.dataset.form;
  //     // console.log(inp.value);
  //     let inpTrim = inp.value.trim();
  //     switch (inpData) {
  //       case 'name':
  //         inputsCheking(inp, inpData, inpTrim);
  //         break;
  //       case 'phone':
  //         inputsCheking(inp, inpData);
  //         break;
  //       case 'email':
  //         inputsCheking(inp, inpData);
  //         break;

  //       default:
  //         break;
  //     }
  //   }
  // }

  // function inputsCheking(input, inputData, inpTrim) {
  //   input.addEventListener('blur', e => {
  //     if (inputData == 'name' && inpTrim.length < 2) {
  //       input.style.border = '1px solid red'
  //       inputLabel.textContent = 'Введи дві або більше букв';
  //       inputLabel.style.fontSize = '16px'
  //       inputLabel.style.color = 'white'
  //       input.after(inputLabel);
  //     } else if (inputData == 'phone') {
  //       input.style.border = '1px solid red'
  //     }
  //     else {
  //       input.style.border = '1px solid green'
  //       inputLabel.remove()
  //     }
  //   })

  // }
  // // input.value.length == 0 && input.value.trim().length == 0

  // function inputsFilter(arr) {
  //   const arrInputs = [];
  //   for (let input of arr) {
  //     let inputVal = input.value;
  //     if (input.tagName == 'INPUT') {
  //       arrInputs.push(input);
  //     }
  //   }
  //   return arrInputs
  // }

  // formCheking(bf)
})