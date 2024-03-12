let numbers = [];
for (let i = 20; i <= 30; i += 0.5) {
    numbers.push(i);
}
console.log(numbers);


let calculationNumber = [];
for (let i = 10; i <= 100; i++) {
    if (i % 10 === 0) {
        calculationNumber.push(i * 27);
    } 
}
console.log(calculationNumber);


let number = 50;
let squareNum = [];
for (let i = 1; i <= 100; i++) {
    if (i * i <= number) {
        squareNum.push(i);
    }
}
console.log(squareNum);


let num = 10;

let isPrime = num > 1;

for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
        isPrime = false;
    }
}
if (isPrime) {
    console.log(num + " является простым числом.");
} else {
    console.log(num + " нe является простым числом.");
}


let number = 81;
for (; number % 3 === 0; number /= 3) {
}
if (number === 1) {
    console.log("Можно получить путем возведения числа 3 в определенную степень.");
} else {
    console.log("Нельзя получить путем возведения числа 3 в определенную степень.");
}
