import React from 'react'
import {connect} from 'react-redux';
import {deleteTodo} from '../../actions';



const List = (props) => {
    return (
        <ul>
            {props.todos.map((todos,index)=>(
                <li key={index}><input type="checkbox"/>
                    {todos.message}
                    
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
});

export default connect (mapStateToProps)(List);
