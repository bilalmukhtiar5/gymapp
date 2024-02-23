import React from 'react'
import logo from '../assets/navbar-logo.webp'
import facebook from '../assets/fb.webp'
import instagram from '../assets/insta.webp'



const Navbar = () => {
  return (
    <>
    {/* Navbar */}
    <nav className="container-fluid navbar navbar-expand-lg">
  <div className="container text-center">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            HOME
          </a>
          <ul className="dropdown-menu" data-bs-theme="dark">
            <li><a className="dropdown-item" href="#">ABOUT</a></li>
            <li><a className="dropdown-item" href="#">FACILITY</a></li>
            
            <li><a className="dropdown-item" href="#">COACHES</a></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GROUP SESSIONS
          </a>
          <ul className="dropdown-menu" data-bs-theme="dark">
            <li><a className="dropdown-item" href="#">TIMETABLE</a></li>
            <li><a className="dropdown-item" href="#">MEMBERSHIPS</a></li>
            
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-disabled="true" href="#">CONTACT</a>
        </li>
      </ul>
      <div classNameName='mx-5 icons'>
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
      </div>
    </div>
  </div>
</nav>
   


    </>
  )
}

export default Navbar