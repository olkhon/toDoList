// listen for submit event

let addSubmit = document.getElementById('add');

const addToDo = (event) => {
    event.preventDefault();
}

addSubmit.addEventListener('click', addToDo);

//