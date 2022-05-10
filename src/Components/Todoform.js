import React from 'react'
import { TodoContext } from '../Context/TodoContext'
import { ADD_TODO } from '../Context/Action.Type'
import {Form,FormGroup,Input,Button,InputGroup,InputGroupAddon} from "reactstrap"


function Todoform() {
  return (
    <div>
        <Form>
            <FormGroup>
                <InputGroup>
                    
                    <input type="text" name="todo" id="todo" placeholder='Your next todo'/>                
                    
                    
                    
                </InputGroup>
                <Button color='success'>
                    Add
                    </Button>
            </FormGroup>
        </Form>
    </div>
  )
}

export default Todoform
