// variables for current day and time
const currentDate = moment().format('dddd Do MMMM').toLowerCase();
const dayOfTheWeek = moment().format('dddd').toLowerCase();

// display current date and time to the screen
$('#currentDate').text(currentDate);
$('#dayOfTheWeek').text(dayOfTheWeek);

// to do list
const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || ["Buy apples", "Buy toothpaste"];

const storeTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const renderTodos = () => {
  // Clear todoList element
  todoList.innerHTML = "";

  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.textContent = todo;
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    li.appendChild(completeBtn);
    todoList.appendChild(li);
  }
}

const removeTodo = (index) => {
  todos.splice(index, 1);
  storeTodos();
  renderTodos();
}

const addTodo = (event) => {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  storeTodos();
  todoInput.value = "";

  // Re-render the list
  renderTodos();
}

// Attach event listener to the todo list
todoList.addEventListener("click", (event) => {
  const buttonEl = event.target;
  if (buttonEl.matches("button")) {
    const parentEl = buttonEl.parentElement;
    const index = parseInt(parentEl.dataset.index);
    removeTodo(index);
  }
});

// Attach event listener to the todo form
todoForm.addEventListener("submit", addTodo);

// Initialise the app
renderTodos();
