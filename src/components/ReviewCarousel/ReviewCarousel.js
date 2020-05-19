import React from 'react';

const ReviewCarousel = props => {

  const { reviewer, date, description } = props.review; 

  return(
    <div className="row carousel__container"> 
      
      <div className="col-lg-12">

        <div className="row">
          <div className="col-lg-8 text-center">
            <h4 className={`review__signature ${props.fade ? 'fade' : ''}`} onAnimationEnd={props.endAnimation}>{reviewer} {date}</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1 col--centervertical">
            <a className="carousel__btn" style={{color: "#613476"}} onClick={props.prev}>&#10094;</a>
          </div>
          <div className="col-lg-6">
            <p className={`review__description ${props.fade ? 'fade' : ''}`} onAnimationEnd={props.endAnimation}>
              {description}
            </p>
          </div>
          <div className="col-lg-1 col--centervertical">
            <a className="carousel__btn" style={{color: "#613476"}} onClick={props.next}>&#10095;</a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 carousel__index-btns">
            <div className="carousel__index carousel__btn" onClick={props.prev}></div>
            <div className="carousel__index carousel__index--active"></div>
            <div className="carousel__index carousel__btn" onClick={props.next}></div>
          </div>
        </div>

      </div>

    </div>
  )
};

export default ReviewCarousel;