import './css/style.css';
import addCityButton from './button';
import Input from './input';
import Div from './div';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const containerDiv = new Div().create('container');
const weatherDiv = new Div().create('weather');

let button = addCityButton.create('addCityBtn');
let input = new Input('Enter your city...').create();

weatherDiv.appendChild(input);
weatherDiv.appendChild(button);
containerDiv.appendChild(weatherDiv);

const body = document.querySelector('body');
body.appendChild(containerDiv);

if (module.hot) {
	module.hot.accept();
}
