import Div from './div';
//import {readData} from './loadTemperature';

class Button {
    constructor(text, action) {
        this.text = text;
        this.type = 'button';
        this.class = 'addButton';
        this.action = action;
    }

    getButton() {
        const button = document.createElement(this.type);
        button.innerText = this.text;
        button.setAttribute('class', this.class);
        button.addEventListener('click', this.action);
        return button;
    }
}

const addCityButton = new Button("Add City", () => {
    const weather = document.querySelector('.weather');
    const pElement = document.createElement('p');
    const input = weather.querySelector('input');
    const cityName = input.value;

    pElement.innerText = cityName;
    input.value = '';
    weather.appendChild(pElement);

});

export default addCityButton;
