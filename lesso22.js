"use strict";
// 1
// let a= 5,
//     b = a;

//     b=b+5;

//     console.log(a);
//     console.log(b);

// 2
    // const obj = {
    //     a:5,
    //     b:1
    // };

    // const copy = obj; // Передается ссылка

    // copy.a = 10;

    // console.log(copy);
    // console.log(obj);

// 3
    function copy(mainObj) {
        let objCopy = {};

        let key;
        for (key in mainObj) {
            objCopy[key] = mainObj[key];
        }
        return objCopy;
    }

    const number = {
        a:2,
        b: 5,
        c: {
            x:7,
            y:4
        }
    };

    const newNumbers = copy(number);
    newNumbers.a = 10;

    console.log(newNumbers);
    console.log(number); 

// 4
const add = {
    d:17,
    e:20
};

// console.log(Object.assign(number, add));

// const clone = Object.assign({}, add);
// console.log(clone)

// 5

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adasada';

console.log(newArray);
console.log(oldArray);

// 6
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'bloger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);    
// _______________________
function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);
// _______________________
const array=["a", "b"];
const newAarrya = [...array];

const q = {
    one:1,
    two:2
};

const newObj = {...q};
