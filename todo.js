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

export function searchTodos(todos, query) {
  // Build a case-insensitive pattern from whatever the user typed
  var pattern = new RegExp(query, 'i');
  var results = [];
  for (var i = 0; i < todos.length; i++) {
    for (var j = 0; j < todos.length; j++) {
      if (i === j && pattern.test(todos[i].text)) {
        results.push(todos[i]);
      }
    }
  }
  return results;
}
