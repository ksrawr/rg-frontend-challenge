import React from 'react';

// Load Screens
import HeroContainer from './screens/HeroContainer';
import MissionContainer from './screens/MissionContainer';

class App extends React.Component {
  render() {
    return(
      <>
        <HeroContainer/>
        {/* <MissionContainer/> */}
      </>
    );
  }
}

export default App;