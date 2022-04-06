import { useEffect, useReducer } from 'react'
import { toDoReducer } from './toDoReducer'

import { ToDoList } from './ToDoList'
import { TodoAdd } from './TodoAdd'
import './styles.css'

const init = () => {
  return JSON.parse(localStorage.getItem('toDos')) || []
}

export const ToDoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, [], init)


  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos))
  }, [toDos])


  return (
    <div>
      <h1>todo app </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ToDoList toDos={toDos} dispatch={dispatch} />
        </div>
        <div className='col-5'>
          <TodoAdd dispatch={dispatch} />
        </div>
      </div>

    </div>
  )
}
