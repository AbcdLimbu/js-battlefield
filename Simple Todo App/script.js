const tasks = document.getElementById("todo-input");
const form = document.getElementById("todo-form");
const taskList = document.getElementById("todo-list");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let taskText = tasks.value.trim();
    if (taskText == ''){
        alert("Please enter a task!! ");
    } 
    addTask(taskText);
});

function addTask(task){
    const li = document.createElement("li");
    li.className = "taskItem"
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.className = "delTask";
    delBtn.textContent = "X";

    delBtn.addEventListener('click', ()=>{
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    tasks.value = ""
}
