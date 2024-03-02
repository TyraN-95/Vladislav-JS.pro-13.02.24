let age = prompt('Введите свою дату рождения:');
let city = prompt('Введите свой город:');
let sport = prompt('Введи свой любимый спорт:');

let currentYear = new Date().getFullYear();
let birthYear = currentYear - parseInt(age);

let message = '';

if (age === null) {
    message += 'Плохо, что вы не ввели свою дату рождения.\n';
} else {
    message += 'Ваш возраст: ' + birthYear + ' лет.\n';
}

if (city === null) {
    message += 'Плохо, что вы не ввели свой город.\n';
} else {
    switch (city.toLowerCase()) {
        case 'киев':
            message += 'Вы живете в столице - України.\n';
            break;
        case 'лондон':
            message += 'Вы живете в столице - Великобритании.\n';
            break;
        case 'вашингтон':
            message += 'Вы живете в столице - США.\n';
            break;
        default:
            message += 'Вы живете в городе - ' + city + '.\n';
            break;  
    }
}

if (sport === null) {
    message += 'Плохо, что вы не ввели свой любимый вид спорта.\n';
} else {
    switch (sport.toLowerCase()) {
        case 'футбол':
            message += 'Хотите стать как Лионель Месси?\n';
            break;
        case 'теннис':
            message += 'Хотите стать как Рафаэль Надаль?\n';
            break;
        case 'баскетбол':
            message += 'Хотите стать как Леброн Джеймс?\n';
            break;
        default:
            message += 'Ваш любимый вид спорта - ' + sport + '.\n';
    }
}

alert(message);

