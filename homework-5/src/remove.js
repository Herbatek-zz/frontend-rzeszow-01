import readLocalStorage from './readLocalStorage';

export default function removeCity(button) {
	let removeCity = button.parentNode.firstChild.textContent;
	let sure = confirm('Are you sure you want to delete: "' + removeCity + '" ?');
	if (sure) {
		button.parentNode.remove();
		if (readLocalStorage() != null) {
			let array = readLocalStorage();
			let idDeletingCity = array.indexOf(removeCity);
			if (idDeletingCity != -1) {
				array.splice(idDeletingCity, 1);
				localStorage.setItem('cityTemperature', JSON.stringify(array));
			}
		}
	}
}
