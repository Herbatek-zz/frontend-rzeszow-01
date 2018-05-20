export default class Input {
    constructor(text) {
        this.text = text;
        this.type = 'input';
        this.class = 'textField';
    }
    getInput() {
        const input = document.createElement(this.type);
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', this.text);
        return input;
    }
}
