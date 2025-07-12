
const inputEle = document.querySelector(".input");
const buttonEle = document.querySelector(".button");
const todosContainerEle = document.querySelector(".todos-container")
let todo;
let todoList = [];

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

buttonEle.addEventListener("click", (e) => {
    e.preventDefault();
    todo = inputEle.value;
    if(todo.length > 0){
        todoList.push({id: uuid(), todo, isCompleted: false});
    }
    console.log(todoList)
    displayTodoList(todoList);
})  

function displayTodoList(todoList){
    todosContainerEle.innerHTML = todoList.map(({id, todo, isCompleted}) => `<div><input id="item-${id}" type="checkbox"><label for="item-${id}" class="todo">${todo}</label><button>Delete</button></div>`)
}