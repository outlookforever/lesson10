"use strict";

// LESSON 12
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = +prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// LESSON 13

const num = 50;
// (num === 50) ? console.log('ok!') : console.log('error');
switch (num) {
    case '100': 
        console.log('NO');
        break;
    case '49': 
        console.log('NO');   
        break;
    default:
        console.log('No 50');
        break;    
}