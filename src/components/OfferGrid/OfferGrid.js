import React from 'react';

const OfferGrid = props => {
  return(
    <div className="row row-cols-2">
      <div className="col offer__icon--center offer__icon--animate mb-5">
        <div className="offer__icon--border">
          <div className="offer__icon offer__icon--clipboard"></div>
        </div>
        <p className="offer__icon__text">LOREM</p>
      </div>
      <div className="col offer__icon--center offer__icon--animate mb-5">
        <div className="offer__icon--border">
          <div className="offer__icon offer__icon--facemask"></div>
        </div>
        <p className="offer__icon__text">LOREM IPSUM</p>
      </div>
      <div className="col offer__icon--center offer__icon--animate">
        <div className="offer__icon--border">
          <div className="offer__icon offer__icon--lab"></div>
        </div>
        <p className="offer__icon__text">LOREM IPSUM</p>
      </div>
      <div className="col offer__icon--center offer__icon--animate">
        <div className="offer__icon--border">
          <div className="offer__icon offer__icon--calendar"></div>
        </div>
        <p className="offer__icon__text">LOREM</p>
      </div>
    </div>
  )
};

export default OfferGrid;