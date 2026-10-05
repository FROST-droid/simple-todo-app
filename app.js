import { addTodo, toggleTodo, removeTodo, countRemaining } from './todo.js';

const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const counter = document.querySelector('#remaining');

let todos = [];

function renderTodo(todo) {
  const item = document.createElement('li');
  item.className = todo.done ? 'done' : '';

  const label = document.createElement('span');
  label.textContent = todo.text;
  label.addEventListener('click', () => {
    todos = toggleTodo(todos, todo.id);
    render();
  });

  const remove = document.createElement('button');
  remove.textContent = 'Delete';
  remove.addEventListener('click', () => {
    todos = removeTodo(todos, todo.id);
    render();
  });

  item.append(label, remove);
  return item;
}

function render() {
  list.replaceChildren(...todos.map(renderTodo));
  counter.textContent = `${countRemaining(todos)} remaining`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value.trim() === '') {
    return;
  }
  todos = addTodo(todos, input.value);
  input.value = '';
  render();
});

render();
