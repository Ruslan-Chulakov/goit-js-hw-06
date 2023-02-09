// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const inputRef = document.querySelector("#name-input");
// console.log(inputRef);
const outputRef = document.querySelector("#name-output");
// console.log(outputRef);

// inputRef.addEventListener('input', (event) => {
//     if(event.currentTarget.value === '') {
//         outputRef.textContent = 'Anonymous';
//     } else {
//         outputRef.textContent = event.currentTarget.value;
//     };
// });

inputRef.addEventListener("input", () => {
  inputRef.value === ""
    ? (outputRef.textContent = "Anonymous")
    : (outputRef.textContent = inputRef.value);
});
