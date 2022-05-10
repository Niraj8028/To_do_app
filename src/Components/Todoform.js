import React from 'react'
import { TodoContext } from '../Context/TodoContext'
import { ADD_TODO } from '../Context/Action.Type'
import { Form, FormGroup, Input, Button, InputGroup,InputGroupText} from "reactstrap"
import { useContext ,useState} from 'react'
import {v4} from "uuid";

const Todoform=()=> {
    const[todostring,setTodostring]=useState("");
    const {dispatch}=useContext(TodoContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todostring===""){
            return alert("please enter todo")
        }
        const todo={
            todostring,
            id: v4()
        }
        dispatch({
            type:ADD_TODO,
            payload:todo
        })
        setTodostring("");
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <InputGroupText>
                        <Input type="text" 
                            name="todo" 
                            id="todo" 
                            placeholder='Your next todo'
                            value={todostring}
                            onChange={e=>setTodostring(e.target.value)}/> 
                            <Button color='success'>
                        Add 
                        </Button>
                            </InputGroupText> 
                    </InputGroup>
                        
                </FormGroup>
            </Form>
        </div>
    )
}

export default Todoform
