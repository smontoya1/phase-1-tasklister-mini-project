const form = document.getElementById("create-task-form");
const taskDescription = document.getElementById("new-task-description");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTask = document.createElement("li");
  newTask.innerText = taskDescription.value;

  taskList.appendChild(newTask);
});