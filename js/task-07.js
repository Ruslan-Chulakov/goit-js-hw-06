// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');


// inputRef.addEventListener('input', () => {
//     console.log(inputRef.value)
//     spanRef.style.fontSize = `${inputRef.value}px`;
// });

inputRef.addEventListener('input', changeFontSize);

function changeFontSize() {
    spanRef.style.fontSize = `${inputRef.value}px`;
}