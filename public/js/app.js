// listen for submit event

let addSubmit = document.getElementById('add');

const addToDo = (event) => {
    event.preventDefault();
}

addSubmit.addEventListener('click', addToDo);

// add new Item to do list

let listItems = document.getElementById('itemsList');

addSubmit.addEventListener('click', () => {
    let newLi = document.createElement('LI');
    listItems.appendChild(newLi);
});