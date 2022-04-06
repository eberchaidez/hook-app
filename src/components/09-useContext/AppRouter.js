
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route exact path='/about' element={<AboutScreen />} />
            <Route exact path='/login' element={<LoginScreen />} />
            <Route exact path='/' element={<HomeScreen />} />
            <Route path='*' element={<div>Not found</div>} />
          </Routes>
        </div>
      </div>
    </Router>

  )
}
