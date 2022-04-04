
// import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1> FormWithCustomHook </h1>
      <hr />

      <div className='mb-3'>
        <label>Nombre</label>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-3'>email
        <label>Email</label>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Tu email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-3'>password
        <label>Password</label>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='*********'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        guardar
      </button>
    </form>
  )
}
