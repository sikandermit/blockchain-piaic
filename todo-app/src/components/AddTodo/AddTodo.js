import React from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../../actions';
import {deleteTodo} from '../../actions';
const AddTodo = (props) => {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            let input = event.target.userInput.value;
            if(input!="")
            {
            props.dispatch(addTodo(input));
            event.target.userInput.value = "";
            }
        }}>
            <input type="text" name="userInput"/>
            <button>Submit</button>
        </form>
    )
}

export default connect() (AddTodo);
