import React from 'react';
import { useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import { TodoContext } from './Context/TodoContext';
import TodoReducer from './Context/Reducer'
import { Container } from 'reactstrap';
import Todoform from './Components/Todoform';
import Todos from './Components/Todos';
const App=()=>{
  const [todos, dispatch]= useReducer(TodoReducer,[]);
  return(
    <TodoContext.Provider value={{todos,dispatch}}>
        <Container fluid>
        <h1>TO DO app with context API</h1>
        <Todos className="mt-5 mb-3"/>
          <Todoform/>      
        </Container>
    </TodoContext.Provider>
  )
}
export default App;
