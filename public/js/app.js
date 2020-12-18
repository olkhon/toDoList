class ToDo {
  constructor(value) {
    this._textInput = document.createTextNode(value);
    this._newLi = document.createElement("LI");
    this._newLi.appendChild(this._textInput);

    this._newLi.id = Date.now();

    this._newButton = document.createElement("button");
    this._buttonText = document.createTextNode("X");
    this._newButton.appendChild(this._buttonText);
    this._newLi.appendChild(this._newButton);
  }
}

class ToDoList {
  constructor() {
    this._toDos = [];


    // we ask aria, ? set/function : ok?
    this._toDoList = document.createElement("UL");
    this._toDoList.id = "itemsList";
    //console.log(this._toDoList);
    document.querySelector("main").append(this._toDoList);
  }

  /* adds the ToDo to the List (appendChild)*/
  addToList() {
    this._toDos.push(this._toDoObject);
  }

  /* execute when click the add button, gets input value, does trim, validation ... , creates a new ToDo, adds it to the List (call addToList() method)*/
  createToDo(inputValue) {
    this._toDoObject = new ToDo(inputValue);
    this._toDoList.appendChild(this._toDoObject._newLi);

    this._toDoObject._newButton.addEventListener("click", this.deleteToDo.bind(this));
    this._toDoObject._newLi.addEventListener("click", this.toggleDone.bind(this));

    this.addToList(this._toDoObject);

  }

  /* click on the ToDo, adding/removing class strike */
  toggleDone(event) {
    console.log(this._toDos);
    event.target.classList.toggle("strike");
    event.target.parentNode.appendChild(event.target);
  }

  /* remove() called on html elements -> target is the button remove the parent (li) */
  deleteToDo(event) {

    this._toDos.forEach((element, index) => {
      if(element._newLi.id === event.target.parentElement.id) {
        this._toDos.splice(index, 1);
      }
    });
    event.target.parentElement.remove();


  }
}

const handleOnLoad = () => {
  return (myList = new ToDoList());
};

//console.log(myList);

const handleSubmit = (event) => {
  event.preventDefault();
  myList.createToDo(document.getElementById("inputUser").value);
};

// initialization onload

window.addEventListener("load", handleOnLoad);

// submit Handler

document.forms[0].addEventListener("submit", handleSubmit);