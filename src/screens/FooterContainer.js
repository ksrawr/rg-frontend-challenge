import React from 'react';
import InstagramSvg from './../images/instagram.svg';
import FacebookSvg from './../images/facebook.svg';

const FooterContainer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row row__footer">
          <div className="col-lg-12 col--centervertical">
            <div className="text-center">
              <p className="social__text">Follow Us:</p>
              <div className="row row--centerhorizontal">
                <img className="social__icon" src={InstagramSvg}/>
                <img className="social__icon" src={FacebookSvg}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FooterContainer;