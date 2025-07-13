
const inputEle = document.querySelector(".input");
const buttonEle = document.querySelector(".button");
const todosContainerEle = document.querySelector(".todos-container")
let todo;
let localData = JSON.parse(localStorage.getItem("todo"));
let todoList = localData || [];

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

todosContainerEle.addEventListener("click", (e) => {
    let key = e.target.dataset.key;
    let deleteKey = e.target.dataset.todokey;
    todoList = todoList.map(todo => todo.id === key ? {...todo, isCompleted: !todo.isCompleted} : todo);
    todoList = todoList.filter(todo => todo.id !== deleteKey);
    displayTodoList(todoList);
    localStorage.setItem("todo", JSON.stringify(todoList));
})

buttonEle.addEventListener("click", (e) => {
    e.preventDefault();
    todo = inputEle.value;
    if(todo.length > 0){
        todoList.push({id: uuid(), todo, isCompleted: false});
    }

    displayTodoList(todoList);
    localStorage.setItem("todo", JSON.stringify(todoList));
    inputEle.value = "";
})  


function displayTodoList(todoList){
    todosContainerEle.innerHTML = todoList.map(({id, todo, isCompleted}) => `<div class="todo relative"> <input id="item-${id}" data-key=${id} class="t-checkbox t-pointer" type="checkbox" ${
        isCompleted ? "checked" : ""
      }> <label data-key=${id} class="todo-text t-pointer ${
        isCompleted ? "checked-todo" : ""
      }" for="item-${id}"> ${todo} </label> <button class="absolute right-0 button cursor">
      <span data-todokey=${id}  class="del-btn material-icons-outlined">delete</span>
            </button> </div>`).join('');
}