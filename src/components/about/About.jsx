import React from 'react'
import './about.css'


import Member from './Member'

const About = () => {
  return (
    <section id="about">
        <div className="container">
          <h1>ABOUT US</h1>
          <div className="members">
            <Member title="성일" ></Member>
            <Member title="강산" ></Member>
            <Member title="정민" ></Member>
            <Member title="해연" ></Member>
          </div>
        </div>
    </section>
  )
}

export default About