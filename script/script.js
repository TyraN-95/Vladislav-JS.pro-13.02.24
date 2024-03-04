let user = prompt("Введите что угодно, через пробел");

let array = user.split(" ");

array.sort();

console.log(array);

array.splice(1,3);

console.log(array);