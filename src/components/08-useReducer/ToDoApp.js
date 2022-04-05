import { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import { toDoReducer } from './toDoReducer'

import './styles.css'

const init = () => {
  return JSON.parse(localStorage.getItem('toDos')) || []
}

export const ToDoApp = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, [], init)

  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos))
  }, [toDos])

  const handleDelete = (toDoId) => {
    const action = {
      type: 'delete',
      payload: toDoId
    }

    dispatch(action)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
    reset()
  }

  return (
    <div>
      <h1>todo app </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ul className='list-group list-group-numbered'>
            {
              toDos.map(toDo => (
                <li
                  key={toDo.id}
                  className=' list-group-item d-flex justify-content-between align-items-center '
                >
                  <p className='curso-pointer '>
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
              ))
            }
          </ul>
        </div>
        <div className='col-5'>
          <h4>Agregar To Do</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Descripción</label>
              <input
                autoComplete='off'
                className='form-control'
                name='description'
                onChange={handleInputChange}
                placeholder='Aprender ....'
                type='text'
                value={description}
              />
            </div>
            <button
              type='submit'
              className='btn btn-outline-primary btn-block'
            >
              Agregar
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
