let count = 0;

const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

function addTask() {
    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    
    deleteBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        li.remove();
        count--;
        taskCount.textContent = count;
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    count++;
    taskCount.textContent = count;
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
