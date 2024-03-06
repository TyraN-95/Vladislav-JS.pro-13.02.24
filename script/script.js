let numbers = [];
for (let i = 10; i <= 20; i++) {
    numbers.push(i)
}
console.log(numbers.join(', '));


let squaresNumbers = [];
for (let i = 10; i <= 20; i++) {
    squaresNumbers.push(i**2);
}
console.log(squaresNumbers.join(', '));


for (let i = 1; i <=10; i++) {
    console.log(" 7 * " + i + " = " + (7 * i));
}


let sum = 0;
for (let i=1; i<=15; i++) {
    sum += i;
}
console.log(sum);


let mult = 1;
for (let i=15; i <=35; i++) {
    mult *= i;
}
console.log(mult);


let sum1 = 0;
for (let i = 1; i <= 500; i++) {
    sum1 += i;
}
let average = sum1 / 500;
console.log(average);


let evenNumbers = [];
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers.join(', '));


let multiplesNumbers = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0){
        multiplesNumbers.push(i);
    }
}
console.log(multiplesNumbers.join(', '))


let number = 40;
let dividers = []; 
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
       dividers.push(i);
    }
}
console.log(dividers);


let numberDividers = 40;
let pairedDivisors = [];
for (let i = 1; i <= numberDividers; i++) {
    if (numberDividers % i === 0 && i % 2 === 0) {
        pairedDivisors.push(i);
    }
}
console.log(pairedDivisors.join(', '));


let sumNumber = 40;
let sumDivisors = 0;
for (let i = 1; i <= sumNumber; i++) {
    if (sumNumber % i === 0 && i % 2 === 0) {
        sumDivisors += i;
    }
}
console.log(sumDivisors + ' Сумма парных делителей. ');


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}
