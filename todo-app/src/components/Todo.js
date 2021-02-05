import React from 'react';
import PropTypes from 'prop-types'
import RemoveTodo from '../containers/RemoveTodo'
import {connect} from 'react-redux'


const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input type="checkbox" />
    {text}  <RemoveTodo/>        
 
  </li>
);

export default Todo;
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}