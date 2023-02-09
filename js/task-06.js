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
    if(inputRef.value.length > 0 && inputRef.value.length < lengValue) {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
    if(inputRef.value.length >= lengValue) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
    if(inputRef.value.length === 0) {
        inputRef.classList.remove('invalid');
        inputRef.classList.remove('valid');
    }
});