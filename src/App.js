import React from 'react';

// Load Screens
import HeroContainer from './screens/HeroContainer';
import MissionContainer from './screens/MissionContainer';
import GettingStartedContainer from './screens/GettingStartedContainer';

class App extends React.Component {
  render() {
    return(
      <>
        <HeroContainer/>
        <MissionContainer/>
        <GettingStartedContainer/>
      </>
    );
  }
}

export default App;