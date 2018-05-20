export default class Div {
    constructior(text) {
        this.class = text;
        this.type = 'div';
    }

    getDiv() {
        const div = document.createElement(this.type);
        div.setAttribute('class', this.class);
        return div;
    }
}
