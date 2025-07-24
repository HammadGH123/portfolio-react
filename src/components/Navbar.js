import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css'

const Topbar = () => {
  return (
    <div className='navbar'>
      <Link className='navlink' to='/portfolio-react'>Home</Link>
      <Link className='navlink' to='/projects'>Projects</Link>
      <Link className='navlink' to='/contact'>Contact me</Link>
      </div>
  )
}

export default Topbar
