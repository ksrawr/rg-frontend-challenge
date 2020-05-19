import React from 'react';

import OfferContent from './../components/OfferContent/OfferContent';
import OfferGrid from './../components/OfferGrid/OfferGrid';

const OfferContainer = () => {
  return (
    <div className="offer__section">
      <div className="container-fluid">
        <div className="row row__offer">

          <div className="col-lg-3 offset-lg-2 col-md-12 col-sm-12 col-xs-12 offer__content">
            <OfferContent/>
          </div>

          <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12 col-xs-12 mt-2 offer__grid">
            <OfferGrid/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default OfferContainer;