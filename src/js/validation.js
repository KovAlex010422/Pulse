document.addEventListener('DOMContentLoaded', function () {
  const formInputs = document.querySelectorAll('.input'),
    forms = document.querySelectorAll('.feed-form'),
    formName = document.querySelectorAll('[data-form=name]'),
    formPhone = document.querySelectorAll('[data-form=phone]'),
    formEmail = document.querySelectorAll('[data-form=email]'),
    label = document.createElement('label');

  forms.forEach(form => form.addEventListener('submit', e => {
    checkData(e.target[0], e.target[1], e.target[2])

    if (!checkName(e.target[0]) || !checkPhone(e.target[1]) || !checkEmail(e.target[2])) {
      e.preventDefault()
    }
  }))

  formName.forEach(name => name.addEventListener('blur', e => checkName(name)));
  formPhone.forEach(phone => phone.addEventListener('blur', e => checkPhone(phone)));
  formEmail.forEach(email => email.addEventListener('blur', e => checkEmail(email)));

  function checkData(name, phone, email) {
    name.addEventListener('blur', e => checkName(name))
    phone.addEventListener('blur', e => checkPhone(phone))
    email.addEventListener('blur', e => checkEmail(email))
  }

  function checkName(name) {
    label.remove();
    if (name.value.length < 2) {
      label.textContent = 'type name whith more 2 char';
      label.classList.add('labelErr')
      name.after(label)
      name.classList.remove('inputCor')
      name.classList.add('inputErr')
      return false
    } else {
      label.remove();
      name.classList.remove('inputErr')
      name.classList.add('inputCor')
      return true
    }
  }

  function checkPhone(phone) {
    let regEx = /^\d{5}$/;

    if (!regEx.test(phone.value)) {
      label.textContent = 'введи тел номер (5 цифр)';
      label.classList.add('labelErr')
      phone.after(label)
      phone.classList.remove('inputCor')
      phone.classList.add('inputErr')
    } else {
      label.remove();
      phone.classList.remove('inputErr')
      phone.classList.add('inputCor')
      return true
    }
    return false

  }

  function checkEmail(email) {
    let regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    label.remove();

    if (!regEx.test(email.value)) {
      label.textContent = 'type correct email';
      label.classList.add('labelErr')
      email.after(label)
      email.classList.remove('inputCor')
      email.classList.add('inputErr')
    } else {
      label.remove();
      email.classList.remove('inputErr')
      email.classList.add('inputCor')
      return true
    }
    return false
  }

})