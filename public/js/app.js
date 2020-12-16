class ToDo {
  constructor(value) {
    this._textInput = document.createTextNode(value);
    this._newLi = document.createElement("LI");
    this._newLi.appendChild(this._textInput);

    this._newButton = document.createElement("button");
    this._buttonText = document.createTextNode("X");
    this._newButton.appendChild(this._buttonText);
    this._newLi.appendChild(this._newButton);
    this._newButton.addEventListener("click", this.deleteToDo);

    /*   this._toDo = "<li>myTodo</li>"; */
    this._markedAsDone = false;
  }

  /* click on the ToDo, adding/removing class strike */
  toggleDone() {}

  /* handles Click on the delete Button */
  deleteToDo() {}
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
  addToList(toDo) {
    this._toDos.push(toDo);
  }

  /* execute when click the add button, gets input value, does trim, validation ... , creates a new ToDo, adds it to the List (call addToList() method)*/
  createToDo(inputValue) {
    this._toDoObject = new ToDo(inputValue);
    this._toDoList.appendChild(this._toDoObject._newLi);

    this._toDoObject._newButton.addEventListener("click", this.deleteToDo);

    this.addToList(this._toDoObject);
    console.log(this._toDos);

    /*     this._newLi = document.createElement("LI");
    this._textInput = document.createTextNode(inputValue);
    this._newLi.appendChild(this._textInput);
    this._toDoList.appendChild(this._newLi);

    this._newButton = document.createElement("button");
    this._buttonText = document.createTextNode("X");
    this._newButton.appendChild(this._buttonText);
    this._newLi.appendChild(this._newButton);
    this.addToList(this._newLi);
    this._newButton.addEventListener("click", function (e) {
      // e.target.parentNode.remove();
      e.target.parentElement.remove();
    });

    // addToList(this._newLi);

    console.log(this._toDos); */
  }

  /* remove() called on html elements -> target is the button remove the parent (li) */
  deleteToDo(event) {
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
