import './css/style.css';
import addCityButton from './button';
import Input from './input';
import Div from './div';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

let containerDiv = new Div('container').getDiv();
let weatherDiv = new Div('weather').getDiv();

let button = addCityButton.getButton();
let input = new Input("Enter your city...").getInput();

weatherDiv.appendChild(input);
weatherDiv.appendChild(button);

containerDiv.appendChild(weatherDiv);

const body = document.querySelector('body');
body.appendChild(containerDiv);

if (module.hot) {
    module.hot.accept();
}
