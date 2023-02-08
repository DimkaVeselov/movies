const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt('Один из последних фильмов который вы посмотрели', '');
const b = prompt('На сколько оцените его', '');
const c = prompt('Один из последних фильмов который вы посмотрели', '');
const d = prompt('На сколько оцените его', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);