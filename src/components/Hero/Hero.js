import React from 'react';

const Hero = () => {
  return (
    <div className="hero col-md-12 col-sm-12 col-xs-12">
      <div className="hero__title">
        <p className="hero__greeting">WELCOME TO</p>
        <p className="hero__name">Rooster Grin</p>
      </div>
      <button className="btn__rg btn__rg--shadow btn__rg--purple hero__btn"><span className="btn__rg--text">BUTTON BUTTON</span></button>
    </div>
  )
}

export default Hero;