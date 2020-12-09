// to-do list
const toDoList = document.getElementById('itemsList');

// listen for submit event
let addSubmit = document.getElementById('add');

const addToDo = (event) => {
    event.preventDefault();
}

addSubmit.addEventListener('click', addToDo);

//

// Click on a delete button to delete the current list item

const deleteButton = document.getElementsByTagName("button");

const arrayDeleteButton = Array.from(deleteButton);
//console.log(arrayDeleteButton);
for (let i = 0; i < arrayDeleteButton.length; i++) {
    arrayDeleteButton[i].addEventListener("click", function() {
        const toDoToDelete = document.getElementsByTagName("li");
        const arraytoDoToDelete = Array.from(toDoToDelete);
        for (let j = 0; j < arraytoDoToDelete.length; j++) {
            arraytoDoToDelete[j].addEventListener('click', function() {
                arraytoDoToDelete[j].remove();
            })
        }
    })
}


//

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

    let getInput = document.getElementById('inputUser').value;

    if (getInput !== "") {
        let newLi = document.createElement('LI');
        let textInput = document.createTextNode(getInput);
        newLi.appendChild(textInput);
        listItems.appendChild(newLi);
    } else {
        alert('Input cant be empty ');
    }
});