import { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <h1>About Screen</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>

      <button
        className='btn btn-outline-primary'
        onClick={() => {
          setUser({})
        }}
      >
        Logout
      </button>
    </div>
  )
}
