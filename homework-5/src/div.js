export default class Div {
    constructor(text) {
        this.class = text;
        this.type = 'div';
    }

    getDiv() {
        const div = document.createElement(this.type);
        div.setAttribute('class', this.class);
        return div;
    }
}
