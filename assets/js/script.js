var formEl = document.querySelector("#task-form");
var taskToDoEl = document.createElement("tasks-to-do");

var createTaskHandler = function (event) {
  console.log(event);

  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task";
  taskToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);