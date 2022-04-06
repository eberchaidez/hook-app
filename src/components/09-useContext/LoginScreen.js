import { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext)

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button
        className='btn btn-outline-primary'
        onClick={() => {
          setUser({
            id: 1,
            name: 'John Doe',
            email: 'eber@gmail.com'
          })
        }}
      >
        Login
      </button>
    </div>
  )
}
