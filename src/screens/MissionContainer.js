import React from 'react';
// import './MissionContainer.css';

import MissionContent from './../components/MissionContent/MissionContent';

const MissionContainer = props => {
  return (
    <div className="mission__section">
    <div className="container-fluid">
      <div className="row row__mission">

        {/* Mission Content */}
        <div className="col-lg-3 offset-lg-3 col-md-3 offset-md-3 col-sm-12 col-xs-12 mission__content ml-auto">
          <MissionContent/>
        </div>

        {/* Mission Image */}
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ml-auto mt-2">
          <img src="./../images/img-1.jpg" className="img-fluid"></img>
        </div>

      </div>
    </div>
    </div>
  )
};

export default MissionContainer;