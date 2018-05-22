import TemperatureReader from './temperatureReader';
import Div from './div';
import averageTemperature from './averageTemperature';
import createRemoveButton from './removeButton';
import readLocalStorage from './readLocalStorage';

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
			const weather = document.querySelector('.weather');
			for(let city of data) {
				const pCity = document.createElement('p');
				const pArrow = document.createElement('p');
				pCity.innerText = city;
				pArrow.innerText = ' ===> ';

				const tempReader = new TemperatureReader(city);

				tempReader.readData(tempReader.getURL()).then(function(data) {
					const pValue = document.createElement('p');
					pValue.innerText = Math.round(averageTemperature(data)) + 'C';
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
		}
	}
}
