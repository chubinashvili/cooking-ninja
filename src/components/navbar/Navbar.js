import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

// styles
import './Navbar.css';

// components
import Searchbar from '../searchbar/Searchbar';
import ThemeSelector from '../theme-selector/ThemeSelector'

const Navbar = () => {
  const { color } = useTheme();
  return (
    <Fragment>
      <div className='navbar' style={{ background: color}}>
          <nav>
              <Link to="/" className='brand'>
                  <h1>Cooking Ninja</h1>
              </Link>
              <Searchbar />
              <Link to="/create">Create Recipe</Link>
          </nav>
      </div>
      <ThemeSelector />
      <Outlet />
    </Fragment>
  )
}

export default Navbar