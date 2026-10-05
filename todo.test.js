import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addTodo, toggleTodo, removeTodo, countRemaining } from './todo.js';

test('addTodo appends a trimmed todo', () => {
  const todos = addTodo([], '  buy milk  ');
  assert.equal(todos.length, 1);
  assert.equal(todos[0].text, 'buy milk');
  assert.equal(todos[0].done, false);
});

test('addTodo rejects empty text', () => {
  assert.throws(() => addTodo([], '   '), /must not be empty/);
});

test('toggleTodo flips only the matching todo', () => {
  const todos = addTodo(addTodo([], 'a'), 'b');
  const toggled = toggleTodo(todos, todos[0].id);
  assert.equal(toggled[0].done, true);
  assert.equal(toggled[1].done, false);
});

test('removeTodo removes by id', () => {
  const todos = addTodo(addTodo([], 'a'), 'b');
  assert.equal(removeTodo(todos, todos[0].id).length, 1);
});

test('countRemaining counts unfinished todos', () => {
  const todos = addTodo(addTodo([], 'a'), 'b');
  assert.equal(countRemaining(toggleTodo(todos, todos[0].id)), 1);
});
