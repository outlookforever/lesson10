"use strict";

const arr = [2,13,26,8,10];
arr.sort();
console.log(arr);

function compareNum(a, b) {
    return a-b;
}
arr.sort(compareNum);
console.log(arr);

// 1
// arr.pop();
// arr.push(10);
// console.log(arr);

// 2
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr) {
//     console.log(value);
// }

//3
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// 4
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// 5
const str = prompt('', '');
const products = str.split(",");
products.sort();
console.log(products.join("; "));
