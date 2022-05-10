import React from 'react'
import { useContext } from 'react'
import {ListGroup,ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
import { REMOVE_TODO } from '../Context/Action.Type'
import { TodoContext } from '../Context/TodoContext'
const Todos=()=>{
    const {todos,dispatch}=useContext(TodoContext)

  return (
        <ListGroup className='mt-5 mb-3 items'>
            {todos.map(todo=>(
                <ListGroupItem key={todo.id}>
                    {todo.todostring}
                    <span className="Float-right"
                    onClick={() =>{
                        dispatch({
                            type:REMOVE_TODO,
                            id:todo.id
                        })
                    }}>
                        <FaCheckDouble/>
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
  )
}

export default Todos
