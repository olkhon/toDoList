


class ToDo {
  constructor (value) {
    this._toDo = "<li>myTodo</li>";
    this._markedAsDone = false;
  }

  /* click on the ToDo, adding/removing class strike */
  toggleDone () {

  }

  /* handles Click on the delete Button */
  deleteToDo () {

  }
}

class ToDoList {
  constructor () {
    this._toDos = [];

    // we ask aria, ? set/function : ok?
    this._toDoList = document.createElement('UL');
    this._toDoList.id = "itemsList";
    //console.log(this._toDoList);
    document.querySelector('main').append(this._toDoList);
  }






  /* execute when click the add button, gets input value, does trim, validation ... , creates a new ToDo, adds it to the List (call addToList() method)*/
  createToDo (inputValue) {
    console.log('to do vreated')
  }

  /* adds the ToDo to the List (appendChild)*/
  addToList () {

  }

  /* remove() called on html elements -> target is the button remove the parent (li) */
  deleteToDo () {

  }


}




const handleOnLoad = () => {
    const myList = new ToDoList ();
    return myList;
}

console.log(myList);

const handleSubmit = (event) => {

    event.preventDefault();

    myList.createToDo(document.getElementById("inputUser").value);

}

// initialization onload

window.addEventListener('load', handleOnLoad);

// submit Handler

document.forms[0].addEventListener('submit', handleSubmit);

