/**
 * Pure todo-list logic. No DOM access, so it is easy to test.
 */

let nextId = 1;

export function createTodo(text) {
  const trimmed = String(text ?? '').trim();
  if (trimmed === '') {
    throw new Error('Todo text must not be empty');
  }
  return { id: nextId++, text: trimmed, done: false };
}

export function addTodo(todos, text) {
  return [...todos, createTodo(text)];
}

export function toggleTodo(todos, id) {
  return todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
}

export function removeTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}

export function countRemaining(todos) {
  return todos.filter((todo) => !todo.done).length;
}
