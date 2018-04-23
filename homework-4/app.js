function addTask() {
    let input = document.querySelector('.input');
    let table = document.querySelector('.table');

    let listItem = createListItem(input.value);
    input.value = '';
    table.appendChild(listItem);
}

function createListItem(text) {
    let listItem = document.createElement('li');

    let button = createRemoveButton();

    let taskText = document.createTextNode(text);
    listItem.appendChild(taskText);
    listItem.appendChild(button);

    return listItem;
}

function createRemoveButton() {
    let button = document.createElement('button');
    let textOnButton = document.createTextNode('remove');
    button.appendChild(textOnButton);
    button.onclick = removeTask;
    return button;
}

function removeTask() {
    let sure = confirm('Are you sure to delete: "' + this.parentNode.firstChild.data +  '" ?');
    if (sure)
        this.parentNode.remove();
}

/*
to do:
zapisywanie w localStorage
css

*/
