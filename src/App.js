import React from 'react';
import { useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import { TodoContext } from './Context/TodoContext';
import TodoReducer from './Context/Reducer'
import { Container } from 'reactstrap';
import Todoform from './Components/Todoform';
import Todos from './Components/Todos';

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todos />
        <Todoform />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
