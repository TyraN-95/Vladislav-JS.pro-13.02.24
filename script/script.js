let arr = [6, 25, 'Hello', 82, 'Good', 'Boys'];
function arithmeticMean (arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }
    return (sum / count).toFixed(3);
}

let result = arithmeticMean(arr);
console.log('Среднее арефмитическое чисел:', result);



let x = parseFloat(prompt('Введите первое число:'));
let znak = prompt('Введите математический знак (+, -, *, /, %, ^):');
let y = parseFloat(prompt('Введите второе число:'));

function doMath(x, znak, y) {
    let result;

    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
    }

    return result.toFixed(3);
}
let result = doMath(x, znak, y);
console.log('Результат:', result);



function doubleArr() {
    let mainArrLength = (prompt('Введите длину основного массива.'));
    let innerArrLength = (prompt('введите длину внутрешнего массива.'));

    let mainArr = [];
    for (let i = 0; i < mainArrLength; i++) {
        let innerArr = [];
        for (let j = 0; j <= innerArrLength; j++) {
            let numElem = prompt('Введите значения для элемента.');
            innerArr.push(numElem);
        }
        mainArr.push(innerArr);
    }
    return mainArr;
}
console.log(doubleArr());



let str = prompt("Введите строку:");
let symbol = prompt("Введите символ для удаления:");

function remove(str, symbol) {

    for (let i = 0; i < symbol.length; i++) {
        str = str.split(symbol[i]).join('');
    }
    return str;
}

let result = remove(str, symbol);
console.log("Результат:", result);
