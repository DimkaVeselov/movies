'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против Гарри поттера',
		],
	};

	const adv = document.querySelectorAll('.promo__adv img');
	const poster = document.querySelector('.promo__bg');
	const genre = poster.querySelector('.promo__genre');
	const movieList = document.querySelector('.promo__interactive-list');
	const addForm = document.querySelector('form.add');
	const addInput = addForm.querySelector('.adding__input');
	const checkbox = addForm.querySelector('[type="checkbox"]');

	addForm.addEventListener('submit', (e) => {
		e.preventDefault();

		let newFilm = addInput.value;
		const favorite = checkbox.checked;

		if (newFilm) {
			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}

			if (favorite) {
				console.dir(newFilm);
			}

			movieDB.movies.push(newFilm.toUpperCase());
			sortArr(movieDB.movies);

			createMovieList(movieDB.movies, movieList);
		}

		e.target.reset();
	});

	const deleteADV = (arr) => {
		arr.forEach((item) => {
			item.remove();
		});
	};

	const makeChanges = () => {
		genre.innerText = 'драма';
		poster.style.backgroundImage = "url('../img/bg.jpg')";
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	function createMovieList(films, parent) {
		parent.innerHTML = ' ';

		sortArr(films);

		films.forEach((film, i) => {
			if (film.length > 21) {
				film = `${film.substring(0, 22)}...`;
			}

			parent.insertAdjacentHTML(
				'beforeend',
				`
			<li class="promo__interactive-item">${i + 1}. ${film}
				<div class="delete"></div>
			</li>
		`,
			);
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', (e) => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);

				createMovieList(films, parent);
			});
		});
	}

	deleteADV(adv);
	makeChanges();

	createMovieList(movieDB.movies, movieList);
});
