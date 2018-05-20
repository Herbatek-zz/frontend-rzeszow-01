class LoaderTemperature {
    constructor(cityName) {
        this.key = 'f216f526930941295b2d79ddd11b4d01';
        this.units = 'metric';
        this.lang = 'pl';
        this.cityName = cityName;
    }

    getURL() {
        let url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + this.cityName;
        url += '&APPID=' + this.key;
        url += 'lang=' + this.lang;
        url += 'units=' + this.units;
        return url;
    }
}


let url = new LoaderTemperature('rzeszow').getURL();

function readData() {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (this.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.response);
            }
        }
        xhr.send();
    })
}


readData().then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
});
