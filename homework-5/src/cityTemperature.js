import Div from './div';
import TemperatureReader from './temperatureReader';
import averageTemperature from './averageTemperature';
import LocalStorage from './localStorage';
import createRemoveButton from './removeButton';

export default function addCityTemperature(input) {
	const weather = document.querySelector('.weather');
	saveToLocalStorage(input);

	const pCity = document.createElement('p');
	const pArrow = document.createElement('p');
	pCity.innerText = input.value;
	pArrow.innerText = ' ===> ';

	const tempReader = new TemperatureReader(input.value);

	tempReader.readData(tempReader.getURL()).then(function(data) {
		const pValue = document.createElement('p');
		pValue.innerText = Math.round(averageTemperature(data)) + 'C';
		input.value = '';
		const temperatureDiv = new Div().create('cityTemperature');
		temperatureDiv.appendChild(pCity);
		temperatureDiv.appendChild(pArrow);
		temperatureDiv.appendChild(pValue);

		temperatureDiv.appendChild(createRemoveButton());

		weather.appendChild(temperatureDiv);
	}).catch(function(err) {
		alert(err);
	});
}

function saveToLocalStorage(input) {
	const ls = new LocalStorage();
	ls.save(input.value);
}
