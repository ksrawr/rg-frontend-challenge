import React from 'react';
import MissionContent from './../components/MissionContent/MissionContent';
import MissionSvg from './../images/img-1.jpg';

const MissionContainer = () => {
  return (
    <div className="mission__section">
    <div className="container-fluid">
      <div className="row row__mission">

        {/* Mission Content */}
        <div className="col-lg-3 offset-lg-2 col-md-5 col-sm-12 col-xs-12 mission__content">
          <MissionContent/>
        </div>

        {/* Mission Image */}
        <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-1 col-sm-12 col-xs-12 mt-2 mission__message">
          <img src={MissionSvg} className="img-fluid"></img>
        </div>

      </div>
    </div>
    </div>
  )
};

export default MissionContainer;