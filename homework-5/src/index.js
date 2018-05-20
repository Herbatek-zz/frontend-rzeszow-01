
import addCityButton from './button';
import cityInput from './input';

let button = addCityButton.getButton();
let input = cityInput.getInput();
let weather = document.querySelector('.weather');

weather.appendChild(input);
weather.appendChild(button);
console.log('aa');
if(module.hot) {
    module.hot.accept();
}
