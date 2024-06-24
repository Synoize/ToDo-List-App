const writeContent = document.querySelector("#content");
const todoList = document.querySelector("#todo-list");
let taskBtn = document.querySelector("#task-btn");
let taskBox = document.querySelector("#task-box");
const writeTask = document.querySelector("#write-task");
const taskList = document.querySelector("#task-list");

writeContent.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        addToDo(this.value);
        this.value = '';
    }
})

function addToDo(val) {
    let todoItem = document.createElement("li");
    todoItem.innerHTML = `${val}`;
    todoList.appendChild(todoItem);
    console.log(val)

    todoItem.addEventListener("click", function () {
        this.style = "height:auto; background-color:rgb(247, 247, 247);"
    })
}

taskBtn.addEventListener("click", () => {
    taskBtn.classList.toggle('task-btn')
    taskBox.classList.toggle('close-task')
})

writeTask.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        addTask(this.value);
        this.value = ''
    }
})

function addTask(val) {
    let task = document.createElement("li");
    task.innerHTML = `${val}`;
    taskList.appendChild(task);
    console.log(val)

    task.addEventListener("click", function () {
        this.style = "height:auto; background-color:rgb(247, 247, 247);"
        this.classList.toggle('task-done')
    })
}