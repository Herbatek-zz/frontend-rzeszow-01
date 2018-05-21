import Div from './div';
import TemperatureReader from './temperatureReader';
import averageTemperature from './averageTemperature';
import LocalStorage from './localStorage';

class Button {
	constructor(text, action) {
		this.text = text;
		this.type = 'button';
		this.action = action;
	}

	create(className) {
		const button = document.createElement(this.type);
		button.innerText = this.text;
		button.setAttribute('class', className);
		button.addEventListener('click', this.action);
		return button;
	}
}

const addCityButton = new Button('Add City', () => {
	const weather = document.querySelector('.weather');
	const input = weather.querySelector('input');
	saveToLocalStorage(input);

	const pElement = document.createElement('p');
	pElement.innerText = input.value + ' ===> ';

	const tempReader = new TemperatureReader(input.value);

	tempReader.readData(tempReader.getURL()).then(function(data) {
		pElement.innerText += ' ' + Math.round(averageTemperature(data)) + 'C';
		input.value = '';
		const temperatureDiv = new Div().create('cityTemperature');
		temperatureDiv.appendChild(pElement);
		weather.appendChild(temperatureDiv);
	}).catch(function(err) {
		alert(err);
	});


});

function saveToLocalStorage(input) {
	const localStorage = new LocalStorage();
	localStorage.save(input.value);
}

export default addCityButton;
