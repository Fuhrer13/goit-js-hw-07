// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');
input.addEventListener('input', function() {
  console.log(this.value.length);
  if (this.value.length == 6) {
    this.classList.remove('invalid');
    this.classList.add('valid');
    return;
  }
  this.classList.remove('valid');
  this.classList.add('invalid');
});
