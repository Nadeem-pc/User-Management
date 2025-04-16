import React from 'react'
import './Home.css'
import Navbar from '../../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="home-container">
        <h1 className="home-title">Welcome to Our App!</h1>
        <p className="home-subtitle">
          Start by logging in or visiting your profile using the navigation bar above.
        </p>
      </div>
    </div>
  )
}

export default Home