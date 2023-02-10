// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.

// Если введено подходящее количество символов, 
// то border инпута становится зелёным, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

const lengValue = inputRef.getAttribute('data-length');
console.log(lengValue);

inputRef.addEventListener('blur', () => {
    let inputLength = inputRef.value.length;
// если количество символов в поле меньше или больше необходимого, класс invalid
    if(inputLength < lengValue || inputLength > lengValue) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
// если нужное количество символов ставим класс valid
    if(inputLength == lengValue) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
// если мы начали вводить символы, потом их удалили, все возвращается в исходное состояние.
    if(inputLength === 0) {
        inputRef.classList.remove('invalid');
        inputRef.classList.remove('valid');
    }
});
