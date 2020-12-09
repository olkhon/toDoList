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