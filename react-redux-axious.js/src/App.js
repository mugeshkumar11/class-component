import React from 'react'
import Todo from './pages/fetchtodo/Todo';
import Axiios from './pages/axios/Axios';
import Material from './pages/material ui/Material';
const App = () => {
 
  return (
    <div>
      <Todo/>
      <Axiios/>
      <Material/>
    </div>
  )
}

export default App