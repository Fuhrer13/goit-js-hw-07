// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.getElementById('name-input');
const span = document.getElementById('name-output');
input.onblur = function handleInputChange(event) {
  span.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    span.textContent = 'незнакомец';
  }
};
