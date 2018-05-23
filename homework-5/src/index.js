// @flow
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
const menuDiv = new Div().create('menu');
const listDiv = new Div().create('list');

const addCityButton = new Button('Add City', () => {
	const userInput = document.querySelector('input');
	addCityTemperature(userInput);
}).create('addBtn');
const inputField = new Input().create('Enter your city...');

menuDiv.appendChild(inputField);
menuDiv.appendChild(addCityButton);
weatherDiv.appendChild(menuDiv);
weatherDiv.appendChild(listDiv);
containerDiv.appendChild(weatherDiv);

const body = document.querySelector('body');
body.appendChild(containerDiv);

const ls = new LocalStorage();
document.addEventListener('DOMContentLoaded', ls.load());

if (module.hot) {
	module.hot.accept();
}
