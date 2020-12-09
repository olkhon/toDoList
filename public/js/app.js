// to-do list
const toDoList = document.getElementById('itemsList');

// listen for submit event
let addSubmit = document.getElementById('add');

const addToDo = (event) => {
    event.preventDefault();
}

addSubmit.addEventListener('click', addToDo);

// eventHandler for toggle to-do to be striked out when done or unstrike
const toggleDone = (e) => {
/*   console.log(this);
  console.log(e.target); */
  e.target.classList.toggle('strike');
}

// eventListener for toggeling done/todo items
toDoList.addEventListener('click', toggleDone);

// add new Item to do list

let listItems = document.getElementById('itemsList');

addSubmit.addEventListener('click', () => {
    let newLi = document.createElement('LI');
    listItems.appendChild(newLi);
});
