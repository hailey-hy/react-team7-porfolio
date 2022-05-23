import React from 'react'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="container">
        <div className="nav-container">
          <div className="nav-content">
              <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>INTRO</a>
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>ABOUT US</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav