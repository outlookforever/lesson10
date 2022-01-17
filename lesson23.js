"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("hello");
    }
};

// const jonh = {
//     health: 100
// };

// 1
// jonh.__proto__ = soldier; //Утаревшия метод
// console.log("armor - ",jonh.armor);
// jonh.sayHello();

// 2
// Object.setPrototypeOf(jonh);

//3
const jonh = Object.create(soldier);

