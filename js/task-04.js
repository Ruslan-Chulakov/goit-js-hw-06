const refs = {
    decrement: document.querySelector('#counter button[data-action="decrement"]'),
    increment: document.querySelector('#counter button[data-action="increment"]'),
    value: document.querySelector('#counter #value')
}

let counterValue = 0;

// decrement
refs.decrement.addEventListener('click', () => {
    counterValue -= 1;
    return refs.value.textContent = counterValue;
})

// increment
refs.increment.addEventListener('click', () => {
    counterValue += 1;
    return refs.value.textContent = counterValue;
})


// // working without counerValue
// refs.decrement.addEventListener('click', () => refs.value.textContent -= 1);

// refs.increment.addEventListener('click', () => refs.value.textContent -= -1);


