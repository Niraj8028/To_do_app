import React from 'react'

import { Form, FormGroup, Input, Button, InputGroup,InputGroupText} from "reactstrap"

import {v4} from "uuid";

const Todoform=({addTodos})=> {
    const[todostring,setTodostring]=useState("");
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todostring===""){
            return alert("please enter todo")
        }
        const todo={
            todostring,
            id: v4()
        }
        addTodos(todo);
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
