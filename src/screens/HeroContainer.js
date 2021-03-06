import React from 'react';

// Load Components
import Logo from '../components/Logo/Logo';
import Hero from '../components/Hero/Hero';



const HeroContainer = () => {
  return (
    <div>
      <div className="container-fluid container__hero">
        
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