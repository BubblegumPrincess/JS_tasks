var userName = prompt('Привет! Ты кто?', '');

if (userName == 'Асконья'){

    var pass = prompt('С возвращением, Аска! Введи пароль.', '');
    if (pass == '159'){

        alert('Добро пожаловать!');

    } else if (pass == null){
        alert('Ну и не входи.');

    } else {
        alert('Неправильно.');
    }


} else if (userName == null){
    alert('Ты передумал входить.');

} else {

    alert('Не знаю такого.');

}