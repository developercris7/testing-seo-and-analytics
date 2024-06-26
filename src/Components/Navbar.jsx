import React from 'react'
import { Link } from 'react-router-dom'
import mixpanel from 'mixpanel-browser'
const Navbar = () => {

  const handleClick = () => {
  //  mixpanel.track("Btn Clicked",{
  //   $btn_name : "Login btn"
  //  })
  }

  return (
    <>
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/services">
          Services
        </Link>
        <button onClick={handleClick}>
         Login
        </button>
      </nav>
    </>
  );
}

export default Navbar