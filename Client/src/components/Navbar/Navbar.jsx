import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h2 className="navbar-app-name">My App</h2>
            </div>
            <div className="navbar-right">
                <button className="navbar-button" >
                    {/* {isLoggedIn ? 'Logout' : 'Login'} */}
                    Login
                </button>
                <button className="navbar-button" >Profile</button>
            </div>
        </nav>
    )
}

export default Navbar