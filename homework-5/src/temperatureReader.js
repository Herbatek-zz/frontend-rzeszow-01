export default class TemperatureReader {
	constructor(cityName) {
		this.key = 'e1a44da8538605c35264672d30ae1d12';
		this.units = 'metric';
		this.lang = 'pl';
		this.cityName = cityName;
	}

	getURL() {
		let url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + this.cityName;
		url += '&APPID=' + this.key;
		url += '&lang=' + this.lang;
		url += '&units=' + this.units;
		return url;
	}

	readData(url) {
		return new Promise(function(resolve, reject) {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.onload = function() {
				if (this.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject(xhr.response);
				}
			};
			xhr.send();
		});
	}
}
