import React from 'react';

import ReviewHeading from './../components/ReviewHeading/ReviewHeading';
import ReviewCarousel from './../components/ReviewCarousel/ReviewCarousel';


class ReviewContainer extends React.Component {
  
  state = {
    reviews: [
      {
        subject: "Lorem Ipsum",
        reviewer: "John Doe",
        date: "08/08/2019",
        description: "Lorem ipsum lorem ipsum",
        rating: 5
      }
    ],
    currentIndex: 0
  };

  next = () => {
    let nextIndex = this.state.currentIndex === this.state.reviews.length - 1 ? this.state.currentIndex : this.currentIndex + 1;

    this.setState({ currentIndex: nextIndex });
  };

  prev = () => {
    let prevIndex = this.state.currentIndex - 1 < 0 ? 0 : this.state.currentIndex + 1;

    this.setState({ currentIndex: prevIndex });
  }

  render() {

    const {reviews, currentIndex} = this.state;

    return (
      <div className="section__review">
        <div className="container-fluid">
          <div className="row row__review">
  
            <div className="col-lg-3 offset-lg-2 col-md-12 col-sm-12 col-xs-12 review__heading">
              <ReviewHeading/>
            </div>
  
            <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12 col-xs-12 mt-2 review__carousel">
              <ReviewCarousel
                next={this.next}
                prev={this.prev}
                review={reviews[currentIndex]}
              />
            </div>
  
          </div>
      </div>
      </div>
    )
  }
}

export default ReviewContainer;