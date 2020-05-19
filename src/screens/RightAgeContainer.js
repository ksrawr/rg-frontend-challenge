import React from 'react';

const RightAgeContainer = () => {
  return (
    <div className="section__rightage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 offset-lg-7 col-md-4 offset-md-7 col-sm-6 offset-sm-6 col-6 offset-6">
            <h3 className="title title--purple mb-3">LOREM IPSUM</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 offset-lg-7 col-md-4 offset-md-7 col-sm-6 offset-sm-6 col-6 offset-6">
              <p className="rightage__description">
                Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 offset-lg-7 col-md-3 offset-md-7 col-sm-6 offset-sm-6 col-6 offset-6">
              <button className="btn__rg--large btn__rg--orange"><span className="btn__rg--text">BUTTON BUTTON</span></button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RightAgeContainer;