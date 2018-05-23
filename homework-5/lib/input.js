export default class Input {
	constructor() {
		this.type = 'input';
		this.class = 'textField';
	}
	create(placeholder) {
		const input = document.createElement(this.type);
		input.setAttribute('type', 'text');
		input.setAttribute('placeholder', placeholder);
		input.required = true;
		input.autofocus = true;
		return input;
	}
}