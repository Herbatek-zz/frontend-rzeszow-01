export default class LocalStorage {

	save(input) {
		if (readLocalStorage() != null) {
			let data = readLocalStorage();
			data.push(input);
			localStorage.setItem('cityTemperature', JSON.stringify(data));
		} else {
			let data = [input];
			localStorage.setItem('cityTemperature', JSON.stringify(data));
		}
	}

	load() {
		if (readLocalStorage() !== null) {
			let data = readLocalStorage();
			for(let city of data) {
				const weather = document.querySelector('.weather');

			}
		}
	}
}

function readLocalStorage() {
	return JSON.parse(localStorage.getItem('cityTemperature'));
}
