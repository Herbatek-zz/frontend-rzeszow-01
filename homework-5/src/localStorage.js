import TemperatureReader from './temperatureReader';
import Div from './div';
import P from './p';
import averageTemperature from './averageTemperature';
import createRemoveButton from './removeButton';
import readLocalStorage from './readLocalStorage';

export default class LocalStorage {
	save(input) {
		if (readLocalStorage() != null) {
			const data = readLocalStorage();
			data.push(input);
			localStorage.setItem('cityTemperature', JSON.stringify(data));
		} else {
			const data = [input];
			localStorage.setItem('cityTemperature', JSON.stringify(data));
		}
	}

	load() {
		if (readLocalStorage() !== null) {
			const data = readLocalStorage();
			const weather = document.querySelector('.weather');
			const p = new P();
			for(let city of data) {
				const pCity = p.create(city);
				const pArrow = p.create(' ===> ');

				const tempReader = new TemperatureReader(city);

				tempReader.readData(tempReader.getURL()).then(function(data) {
					const pValue = p.create(Math.round(averageTemperature(data)) + 'C');
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
