
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

todosContainerEle.addEventListener("click", (e) => {
    let key = e.target.dataset.key;
    let deleteKey = e.target.dataset.todokey;
    todoList = todoList.map(todo => todo.id === key ? {...todo, isCompleted: !todo.isCompleted} : todo);
    todoList = todoList.filter(todo => todo.id !== deleteKey);
    displayTodoList(todoList);
})

buttonEle.addEventListener("click", (e) => {
    e.preventDefault();
    todo = inputEle.value;
    if(todo.length > 0){
        todoList.push({id: uuid(), todo, isCompleted: false});
    }

    displayTodoList(todoList);
    inputEle.value = "";
})  


function displayTodoList(todoList){
    todosContainerEle.innerHTML = todoList.map(({id, todo, isCompleted}) => `<div><input data-key=${id} id="item-${id}" type="checkbox" ${isCompleted ? "checked" : ""}><label data-key=${id} for="item-${id}" class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}">${todo}</label><button class="button cursor" data-todokey=${id}>Delete</button></div>`).join('');
}