import React, { useEffect } from 'react'
import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ({ toDos, dispatch }) => {
  useEffect(() => {
    console.log('ToDoList rendered!')
  }, [toDos])
  return (

    <ul className='list-group list-group-numbered'>
      {toDos
        .map(toDo => (
          <ToDoListItem key={toDo.id} toDo={toDo} dispatch={dispatch} />
        ))}
    </ul>
  )
}
