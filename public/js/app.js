// to-do list
const toDoList = document.getElementById('itemsList');

// listen for submit event
let addSubmit = document.getElementById('add');

const addToDo = (event) => {
    event.preventDefault();
}

addSubmit.addEventListener('click', addToDo);

//

// Click on a delete button to hide the current list item

const deleteButton = document.getElementsByTagName("button");

for (let i = 0; i < deleteButton.length; i++){
    deleteButton[i].addEventListener("click", function () {
        const toDoToDelete = document.getElementsByTagName("li");
        toDoToDelete[i].style.display = "none";
    })
}

//

// eventHandler for toggle to-do to be striked out when done or unstrike
const toggleDone = (event) => {
  console.log(event.target);
  /* console.log(this);
  console.log(event.target); */
  event.target.classList.toggle('strike');
  event.target.parentNode.appendChild(event.target);
}

// eventListener for toggeling done/todo items
toDoList.addEventListener('click', toggleDone);

// add new Item to do list

let listItems = document.getElementById('itemsList');


addSubmit.addEventListener('click', () => {

    let getInput = document.getElementById('inputUser').value;

    if (getInput !== "") {
        let newLi = document.createElement('LI');
        let textInput = document.createTextNode(getInput);
        newLi.appendChild(textInput);
        listItems.appendChild(newLi);
    } else {
      alert('Input cannot be empty');
    }
});
