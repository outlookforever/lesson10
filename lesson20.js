"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
// 1
// delete options.name;
// console.log(options);

// 2
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//     console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);
//     }
// }

// 3 
console.log(Object.keys(options));
console.log(Object.keys(options).length);

options.makeTest(); 
