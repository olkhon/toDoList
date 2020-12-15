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
  constructor (toDos = []) {
    this._toDos = toDos;
    this._toDoList = createElement('UL').id('itemsList');
    console.log(this._toDoList);
    document.forms[0].append(this._toDoList);

  }

  /* execute when click the add button, gets input value, does trim, validation ... , creates a new ToDo, adds it to the List (call addToList() method)*/
  createToDo (inputValue) {

  }

  /* adds the ToDo to the List (appendChild)*/
  addToList () {

  }

  /* remove() called on html elements -> target is the button remove the parent (li) */
  deleteToDo () {
    
  }


}