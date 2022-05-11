import React from "react";
import {ListGroup,ListGroupItem} from "reactstrap"
import {FaCheckDouble} from 'react-icons/fa'

const Todos=({todos,markComplete})=>{
    return(
        <ListGroup>
            {todos.map(todo=>{
                <ListGroupItem key={todo.id}>
                    {todo.todostring}
                    <span onClick={()=>{markComplete(todo.id)}}><FaCheckDouble/></span>
                </ListGroupItem>
            })}
        </ListGroup>
    )
}
export default Todos;