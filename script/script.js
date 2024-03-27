function func() {
    let sum = 0;
    return function(num) {
        sum += num;
        return sum;
    };
}

let result = func();

console.log(result(3));
console.log(result(5));
console.log(result(20));
