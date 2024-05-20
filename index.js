const primeNumsModule = require("arr_prime_numbers");

/* Введите Ваши начальное и конечное значение простых чисел */
const startNum = 42;
const endNumber = 500;
/* И запустите node index.js через терминал */

function findStartElement(array, startNum) {
    for(let i = 1; i < array.length; ++i) {
        if (array[i] > startNum) return i;
    }
}

const allPrimeNumsArray = primeNumsModule.primeNumbers(endNumber);

const indexOfFirstPrimeNum = findStartElement(allPrimeNumsArray, startNum);

const resultArrayOfPrimeNums = allPrimeNumsArray.slice(indexOfFirstPrimeNum);

console.log(resultArrayOfPrimeNums);