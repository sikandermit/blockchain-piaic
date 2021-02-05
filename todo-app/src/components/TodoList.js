import React from 'react';
import RemoveTodo from '../containers/RemoveTodo';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    <li>{todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}</li>
  </ul>
);

export default TodoList;