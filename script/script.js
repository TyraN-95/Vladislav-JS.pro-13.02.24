let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

function positiveSumQuantity(arr) {
  let positiveSum = 0;
  let quantityElem = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveSum += arr[i];
        quantityElem++;
    }
  }
  return {positiveSum, quantityElem}
}
let result = positiveSumQuantity(arr);
console.log('Сумма положительных элементов:', result.positiveSum);
console.log('Количество положительных элементов:', result.quantityElem);

function minElemOrdinal(arr) {
   let minElem = 0;
   let ordinalNum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minElem) {
        minElem = arr[i];
        ordinalNum = i;
    }
  }
  return {minElem, ordinalNum}
}
let result = minElemOrdinal(arr);
console.log('Минимальный элемент:', result.minElem);
console.log('Порядковый номер:', result.ordinalNum);

function manElemOrdinal(arr) {
   let maxElem = 0;
   let ordinalNum = 0;
   
   for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] > maxElem) {
        maxElem = arr[i];
        ordinalNum = i;
    }
   }
   return {maxElem, ordinalNum}
}
let result = manElemOrdinal(arr);
console.log('Максимальный элемент:', result.maxElem);
console.log('Порядковый номер:', result.ordinalNum);

function nagativElem() {
    let negElem = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negElem++;
        }
    }
    return negElem;
}
let result = nagativElem(arr);
console.log('Количество негативных элементов:', result);

function unpairedPositivElem(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 !== 0) {
            count++
        }
    }
    return count;
}
let result = unpairedPositivElem(arr);
console.log('Количество непарных положительных элементов:', result);

function doublesPositivElem(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 === 0) {
            count++
        }
    }
    return count;
}
let result = doublesPositivElem(arr);
console.log('Количество парных положительных элементов:', result);

function sumDoublesPositivElem(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 === 0) {
            count += arr[i];
        }
    }
    return count;
}
let result = sumDoublesPositivElem(arr);
console.log('Сумма парных положительных элементов:', result);

function sumUnpairedPositivElem(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 !== 0) {
            count += arr[i];
        }
    }
    return count;
}
let result = sumUnpairedPositivElem(arr);
console.log('Сумма нечетных положительных элементов:', result);

function multiPositivElem(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 ) {
            count *= arr[i];
        }
    }
    return count;
}
let result = multiPositivElem(arr);
console.log('Произведение положительных элементов:', result);

function maxElement(arr) {
    let count = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== count) {
            arr[i] = 0;
        }
    }
    return arr;
}
let result = maxElement(arr);
console.log(result);