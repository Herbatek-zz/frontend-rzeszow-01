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
        return button;
    }
}

const addCityButton = new Button("Dodaj", () => {
    // tutaj napisz akcję - tzn. dodawanie nowego miasta
});

export default addCityButton;
