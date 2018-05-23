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
		input.addEventListener('keyup', (e) => {
			if(e.keyCode === 13) {
				document.querySelector('.addBtn').click();
			}
		});
		return input;
	}
}
