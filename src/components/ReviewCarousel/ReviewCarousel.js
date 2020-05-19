import React from 'react';

const ReviewCarousel = props => {

  const { reviewer, date, description } = props.review; 

  return(
    <div className="row carousel__container"> 
      
      <div className="col-lg-12">

        <div className="row">
          <div className="col-lg-8 text-center">
            <h4 className="review__signature">{reviewer} {date}</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1 col--centervertical">
            &#10094;
          </div>
          <div className="col-lg-6">
            <p className="review__description">{description}</p>
          </div>
          <div className="col-lg-1 col--centervertical">
            &#10095;
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 carousel__index-btns">
            <div className="carousel__index"></div>
            <div className="carousel__index carousel__index--active"></div>
            <div className="carousel__index"></div>
          </div>
        </div>

      </div>

      



    </div>
  )
};

export default ReviewCarousel;