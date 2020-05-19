import React from 'react';

// Load Screens
import HeroContainer from './screens/HeroContainer';
import MissionContainer from './screens/MissionContainer';
import GettingStartedContainer from './screens/GettingStartedContainer';
import OfferContainer from './screens/OfferContainer';
import RightAgeContainer from './screens/RightAgeContainer';
import ReviewContainer from './screens/ReviewContainer';

class App extends React.Component {
  render() {
    return(
      <>
        <HeroContainer/>
        <MissionContainer/>
        <GettingStartedContainer/>
        <OfferContainer/>
        <RightAgeContainer/>
        <ReviewContainer/>
      </>
    );
  }
}

export default App;