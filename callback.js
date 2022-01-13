"use strict";

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500); //Задержка ф-ции в 0,5 сек.
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback ) {
    console.log(`Яучу: ${lang}`);
    callback();
}
function done() {
    console.log('Я прошел этот урок!');
}
learnJS('JavaScript', done );