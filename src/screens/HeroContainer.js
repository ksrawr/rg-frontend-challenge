import React from 'react';
import './HeroContainer.css';

// Load Components
import Logo from '../components/Logo/Logo';
import Hero from '../components/Hero/Hero';

const HeroContainer = props => {
  return (
    <div class="container container--hero">
      
      {/* <Logo/> */}
      <div class="row">
        <Logo/>
      </div>

      {/* Hero */}
      <div class="row">
        <Hero/>
      </div>
    </div>
  )
}

export default HeroContainer;