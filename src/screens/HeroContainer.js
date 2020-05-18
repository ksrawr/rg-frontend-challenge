import React from 'react';
import './HeroContainer.css';

// Load Components
import Logo from '../components/Logo/Logo';
import Hero from '../components/Hero/Hero';



const HeroContainer = props => {
  return (
    <div>
      <div className="container-fluid container--hero">
        
        {/* <Logo/> */}
        <div className="row">
          <Logo/>
        </div>

        {/* Hero */}
        <div className="row">
          <Hero/>
        </div>
      </div>
    </div>
  )
}

export default HeroContainer;