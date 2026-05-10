const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll("[data-panel]");

const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercaseInput = document.getElementById("uppercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

let todos = [];

function switchTab(tabId) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = `todo-item${todo.completed ? " completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-check";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      renderTodos();
    });

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "todo-remove";
    removeButton.textContent = "Delete";
    removeButton.addEventListener("click", () => {
      todos = todos.filter((currentTodo) => currentTodo.id !== todo.id);
      renderTodos();
    });

    item.append(checkbox, text, removeButton);
    todoList.append(item);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchTab(button.dataset.tab);
  });
});

function buildCharacterPool() {
  let pool = lowercaseChars;

  if (uppercaseInput.checked) {
    pool += uppercaseChars;
  }

  if (numbersInput.checked) {
    pool += numberChars;
  }

  if (symbolsInput.checked) {
    pool += symbolChars;
  }

  return pool;
}

function generatePassword() {
  const length = Number(lengthInput.value);
  const pool = buildCharacterPool();

  let password = "";

  for (let index = 0; index < length; index += 1) {
    password += pool[Math.floor(Math.random() * pool.length)];
  }

  passwordInput.value = password;
}

lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", async () => {
  if (!passwordInput.value) {
    generatePassword();
  }

  await navigator.clipboard.writeText(passwordInput.value);
  copyBtn.textContent = "Copied";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1200);
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();

  if (!text) {
    return;
  }

  todos.unshift({
    id: Date.now(),
    text,
    completed: false,
  });

  todoInput.value = "";
  renderTodos();
});

generatePassword();
renderTodos();
