document.addEventListener("DOMContentLoaded", loadLocalStorage());

function createTask() {
    let input = document.querySelector('.input');
    addTask(input.value);
    saveLocalStorage(input.value);
    input.value = '';
}

function addTask(input) {
    let listItem = createListItem(input);
    let table = document.querySelector('.table');
    table.appendChild(listItem);
}

function createListItem(text) {
    let listItem = document.createElement('li');
    let button = createRemoveButton();

    let taskText = document.createTextNode(text);
    let pElement = document.createElement('p');
    pElement.appendChild(taskText);
    listItem.appendChild(pElement);
    listItem.appendChild(button);

    return listItem;
}

function createRemoveButton() {
    let button = document.createElement('button');
    let textOnButton = document.createTextNode('Remove');
    button.appendChild(textOnButton);
    button.onclick = removeTask;
    return button;
}

function removeTask() {
    let deleteTask = this.parentNode.firstChild.textContent;
    let sure = confirm('Are you sure you want to delete: "' + deleteTask + '" ?');
    if (sure) {
        this.parentNode.remove();
        if (readTaskList() != null) {
            let array = readTaskList();
            let idDeleteTask = array.indexOf(deleteTask);
            if (idDeleteTask != -1) {
                array.splice(idDeleteTask, 1);
                localStorage.setItem('taskList', JSON.stringify(array));
                }
        }
    }
}

function saveLocalStorage(input) {
    if (readTaskList() != null) {
        let array = readTaskList();
        console.log(input);
        array.push(input);
        localStorage.setItem('taskList', JSON.stringify(array));
    } else {
        let array = [input];
        localStorage.setItem('taskList', JSON.stringify(array));
    }
}

function loadLocalStorage() {
    if (readTaskList() !== null) {
        let array = readTaskList();
        array.forEach(function(task) {
            addTask(task);
        });
    }
}

function readTaskList() {
    return JSON.parse(localStorage.getItem('taskList'));
}
