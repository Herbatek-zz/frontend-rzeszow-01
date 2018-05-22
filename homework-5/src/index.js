import './css/style.css';
import Button from './button';
import Input from './input';
import Div from './div';
import LocalStorage from './localStorage';
import addCityTemperature from './cityTemperature';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const containerDiv = new Div().create('container');
const weatherDiv = new Div().create('weather');

let button = new Button('Add City', () => {
	const input = document.querySelector('input');
	addCityTemperature(input);
}).create('addBtn');
let input = new Input('Enter your city...').create();

weatherDiv.appendChild(input);
weatherDiv.appendChild(button);
containerDiv.appendChild(weatherDiv);

const body = document.querySelector('body');
body.appendChild(containerDiv);
let ls = new LocalStorage();
document.addEventListener('DOMContentLoaded', ls.load());

if (module.hot) {
	module.hot.accept();
}
