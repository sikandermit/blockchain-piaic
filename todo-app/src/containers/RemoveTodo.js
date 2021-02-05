import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'

let RemoveTodo = ({id,dispatch}) => {
  return (
      <div>
        <button onClick={e => {
          e.preventDefault()
          dispatch(deleteTodo())

          //console.log(dispatch(deleteTodo()));
        }}>X</button>
      </div>
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo