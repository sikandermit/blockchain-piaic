import React from 'react';

import {connect} from 'react-redux'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input type="checkbox" />
    {text}         
 
  </li>
);

export default Todo;
