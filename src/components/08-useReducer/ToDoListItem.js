import { useEffect } from 'react'

export const ToDoListItem = ({ toDo, dispatch }) => {
  useEffect(() => {
    console.log('ToDoListItem rendered!')
  }, [])
  const handleDelete = () => { // delete toDo
    dispatch({ // dispatch action
      type: 'delete',
      payload: toDo.id
    })
  }

  const handleToggle = () => { // toggle toDo
    dispatch({
      type: 'toggle',
      payload: toDo.id
    })
  }

  return (
    <li className=' list-group-item d-flex justify-content-between align-items-center '>
      <p
        className={toDo.done ? 'curso-pointer complete' : 'curso-pointer'}
        onClick={() => handleToggle(toDo.id)}
      >
        {toDo.description}
      </p>
      <span className='badge bg-secondary badge-pill'>{toDo.done ? 'complete' : 'not complete'}</span>
      <button
        type='button'
        className='btn btn-danger'
        onClick={() => handleDelete(toDo.id)}
      >
        Borrar
      </button>
    </li>
  )
}
