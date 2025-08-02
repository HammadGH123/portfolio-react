import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css'

const Topbar = () => {
  return (
    <div className='topbar'>
    {/* <div className="note">
        <p>
          <b>Note</b> : Some of the projects are not live due to free APIs
          working only on localhost. To view the code, check out my
          GitHub—link's on the Contact page!
        </p>
      </div> */}
    <div className='navbar'>
      <a className='navlink' href='#home'>Home</a>
      <a className='navlink' href='#projects'>Projects</a>
      <a className='navlink' href='#contact'>Contact me</a>
      </div>
      </div>
  )
}

export default Topbar
