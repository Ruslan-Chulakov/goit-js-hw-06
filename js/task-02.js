// В HTML есть пустой список ul#ingredients.

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ==переменная которой присваиваем пустой массив и в которую будем записывать
// ==результат выполнения функции,которая создает новые элементы списка 

const newItems = [];

// ==функция которая создает новые элементы списка в каждый из которых
// ==присваивается значение из данного исходного массива (ingredients)
// ==и записывает результат после каждой итерации в объявленную выше переменную

function createElements (arr) {
  arr.forEach(element => {
    const newElem = document.createElement('li');
    newElem.textContent = element;
    newElem.classList.add('item');
    // console.log(newElem)
    newItems.push(newElem)
  });
}

// ==вызываем нашу функцию

createElements(ingredients);
// console.log(newItems)

// ==создаём переменную в которую записываем ссылку на элемент в который 
// ==нам необходимо поместить наши новые элементы

const listRef = document.querySelector('#ingredients');


// за один приём добавляем созданные нами элементы в код,
// по ссылке полученой выше

listRef.append(...newItems);