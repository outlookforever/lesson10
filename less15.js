const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actor: {},
  genres: [],
  privat: false
};

for (let i=0, i<2, i++) {
  const a = prompt('Один из последних фильмов',''),
        b = prompt('На сколько оцените его','');
       
    if (a != null && b != null && a != '' && b != '' && a.lenght <50) {
      personalMovieDB.movies[a] = b;
      console.log('done');    
    } 
    else {
      console.log('error');
      i--;
    } 
} 



console.log(personalMovieDB);
