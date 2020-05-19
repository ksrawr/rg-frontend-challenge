import React from 'react';

const FooterContainer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row row__footer">
          <div className="col-lg-12 col--centervertical">
            <div className="text-center">
              <p className="social__text">Follow Us:</p>
              <div className="row row--centerhorizontal">
                <img className="social__icon" src="./../images/instagram.svg"/>
                <img className="social__icon" src="./../images/facebook.svg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FooterContainer;