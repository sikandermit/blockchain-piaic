import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <h1>TODO APP </h1>
    <VisibleTodoList />
    <Footer />
    <hr/>
    <AddTodo />
  </div>
);

export default App;