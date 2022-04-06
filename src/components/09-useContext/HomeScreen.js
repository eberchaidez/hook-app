import { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
  const { user } = useContext(UserContext)

  console.log('HomeScreen.js: user', user)

  return (
    <div>
      <h1>Home Screen</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>
    </div>
  )
}
