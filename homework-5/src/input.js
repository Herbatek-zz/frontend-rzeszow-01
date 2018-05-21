export default class Input {
	constructor(text) {
		this.text = text;
		this.type = 'input';
		this.class = 'textField';
	}
	create() {
		const input = document.createElement(this.type);
		input.setAttribute('type', 'text');
		input.setAttribute('placeholder', this.text);
		input.required = true;
		input.autofocus = true;
		return input;
	}
}
