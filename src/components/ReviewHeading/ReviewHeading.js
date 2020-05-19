import React from 'react';

const ReviewHeading = props => {

  const {subject, rating} = props.review;

  return (
    <>
      {/* Review Subject */}
      <h3 className={`review__subject ${props.fade ? 'fade' : ''}`} onAnimationEnd={props.endAnimation}>{subject}</h3>
      {/* Review Rating */}
      <span className={`review__star ${props.fade ? 'fade' : ''}`} onAnimationEnd={props.endAnimation}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    </>
  )
}

export default ReviewHeading;