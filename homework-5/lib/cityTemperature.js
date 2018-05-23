import Div from './div';
import P from './p';
import TemperatureReader from './temperatureReader';
import averageTemperature from './averageTemperature';
import LocalStorage from './localStorage';
import createRemoveButton from './removeButton';

export default function addCityTemperature(userInput) {
	const p = new P();
	const pCity = p.create(userInput.value);
	const pArrow = p.create(' ===> ');

	const tempReader = new TemperatureReader(userInput.value);
	tempReader.readData(tempReader.getURL()).then(function (data) {
		saveToLocalStorage(userInput);
		userInput.value = '';

		const temperatureDiv = new Div().create('cityTemperature');
		temperatureDiv.appendChild(pCity);
		temperatureDiv.appendChild(pArrow);
		const pValue = p.create(Math.round(averageTemperature(data)) + 'C');
		temperatureDiv.appendChild(pValue);
		temperatureDiv.appendChild(createRemoveButton());
		const weather = document.querySelector('.weather');
		weather.appendChild(temperatureDiv);
	}).catch(function (err) {
		alert(err);
	});
}

function saveToLocalStorage(userInput) {
	const ls = new LocalStorage();
	ls.save(userInput.value);
}