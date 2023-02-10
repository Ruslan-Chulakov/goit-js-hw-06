// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1) Размеры самого первого <div> - 30px на 30px.

// 2) Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

// 3) Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes')
};

let value = 0;
refs.input.addEventListener('input', (event) => value = event.currentTarget.value);



function createBoxes(amount) {

  // refs.divBoxes.innerHTML = ''; //var1

  const newDivs = [];

  let size = 30;

  for (let i = 0; i < amount ; i += 1) {
    const newElement = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    newDivs.push(newElement);
    size += 10;
  };

  value = 0;

  refs.divBoxes.innerHTML = newDivs.join(''); //var2

  // refs.divBoxes.insertAdjacentHTML("afterbegin", newDivs.join('')); //var1
}

refs.create.addEventListener('click', () => createBoxes(value));

// refs.destroy.addEventListener('click', () => {
//   refs.divBoxes.innerHTML = '';
//   refs.input.value = '';
// });

function destroyBoxes() {
  refs.divBoxes.innerHTML = '';
  refs.input.value = '';
}

refs.destroy.addEventListener('click', destroyBoxes);
