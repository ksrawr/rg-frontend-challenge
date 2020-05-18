import React from 'react';
// import './MissionContainer.css';

import MissionContent from './../components/MissionContent/MissionContent';

const MissionContainer = props => {
  return (
    <div className="container container__mission">
      <div className="row">

        {/* Mission Content */}
        <div className="col-md-3 offset-md-3">
          <MissionContent/>
        </div>

        {/* Mission Image */}
        <div className="col-md-6">

        </div>

      </div>
    </div>
  )
};

export default MissionContainer;