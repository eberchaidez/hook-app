import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ dispatch }) => {
  useEffect(() => {
    console.log('TodoAdd rendered!')
  }, [])

  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

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
    <>
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
    </>
  )
}
