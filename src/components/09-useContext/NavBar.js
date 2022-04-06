import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>Use Context</Link>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>

            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Home
            </NavLink>

            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              About
            </NavLink>

            <NavLink
              to='/login'
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Login
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  )
}
