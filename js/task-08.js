// Напиши скрипт управления формой логина.

// 1) Обработка отправки формы form.login-form должна быть по событию submit.

// 2) При отправке формы страница не должна перезагружаться.

// 3) Если в форме есть незаполненные поля, выводи alert с предупреждением
//  о том, что все поля должны быть заполнены.

// 4) Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в обьект, где имя поля будет именем свойства, 
// а значение поля - значением свойства. 
// Для доступа к элементам формы используй свойство elements.

// 5) Выведи обьект с введенными данными в консоль 
// и очисти значения полей формы методом reset.

const formRef = document.querySelector('.login-form');
// console.log(formRef);

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.elements);
    const { elements: {email, password} } = event.currentTarget;
    
    // console.log(email.value);
    // console.log(password.value);

    if(email.value === '' || password.value === '') {
        return alert(`Something going wrong... Fill all fields please!`)
    };

    const user = {
        email: email.value,
        password: password.value
    }
    console.log(user);

    event.currentTarget.reset();
}
