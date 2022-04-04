
import { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: 'eber Isaac',
    email: ''
  })

  const { name, email } = formState

  useEffect(() => {
    // console.log('first rendered!')
  }, [])

  useEffect(() => {
    // console.log('formState cambio')
  }, [formState])

  useEffect(() => {
    // console.log('email cambio')
  }, [email])

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1> UseEffect </h1>
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
      {(name === '123') && <Message />}
      <button type='submit' className='btn btn-primary'>Submit</button>
    </>
  )
}
