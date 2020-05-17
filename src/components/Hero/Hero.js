import React from 'react';

const Hero = props => {
  return (
    <div className="hero">
      <p className="hero__greeting">WELCOME TO</p>
      <p className="hero__title">Rooster Grin</p>
      <button className="btn__rg btn__rg--shadow btn__rg--purple hero__btn"><span className="btn__rg__text">BUTTON BUTTON</span></button>
    </div>
  )
}

export default Hero;