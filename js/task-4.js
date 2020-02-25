// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const subBtn = document.querySelector("[data-action='increment']");
const addBtn = document.querySelector("[data-action='decrement']");
const span = document.querySelector('#value');
const div = document.querySelector('#counter ');

let counterValue = 0;
const increment = () => {
  span.textContent = counterValue += 1;
};

const decrement = () => {
  span.textContent = counterValue -= 1;
};
subBtn.addEventListener('click', increment);
addBtn.addEventListener('click', decrement);
