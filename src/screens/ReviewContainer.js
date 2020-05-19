import React from 'react';

import ReviewHeading from './../components/ReviewHeading/ReviewHeading';
import ReviewCarousel from './../components/ReviewCarousel/ReviewCarousel';


class ReviewContainer extends React.Component {
  
  state = {
    // For carousel demonstration purposes only
    reviews: [
      {
        subject: "LOREM IPSUM DOLOR SIT AMET",
        reviewer: "John Doe",
        date: "08/08/2019",
        description: "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.",
        rating: 5
      },
      {
        subject: "LOREM IPSUM DOLOR SIT AMET",
        reviewer: "John Doe 2",
        date: "08/09/2019",
        description: "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.",
        rating: 4
      },
      {
        subject: "LOREM IPSUM John Doe 3",
        reviewer: "John Doe 3",
        date: "08/09/2019",
        description: "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.",
        rating: 4
      }
    ],
    currentIndex: 0
  };

  next = () => {
    let nextIndex = this.state.currentIndex === this.state.reviews.length - 1 ? this.state.currentIndex : this.state.currentIndex + 1;

    this.setState({ currentIndex: nextIndex });
  };

  prev = () => {
    let prevIndex = this.state.currentIndex - 1 < 0 ? 0 : this.state.currentIndex - 1;

    this.setState({ currentIndex: prevIndex });
  }

  render() {
    console.log('[ReviewContainer] render', this.state);
    const {reviews, currentIndex} = this.state;
    console.log(reviews, currentIndex);

    return (
      <div className="section__review">
        <div className="container-fluid">
          <div className="row row__review">
  
            <div className="col-lg-3 offset-lg-2 col-md-12 col-sm-12 col-xs-12 review__heading col--centervertical">
              <ReviewHeading
                review={reviews[currentIndex]}
              />
            </div>
  
            <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12 col-xs-12 mt-2 review__carousel col--centervertical">
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