import React, { Component } from 'react';
import './App.css';
import makeValidationErrorAnimation from './HOC/shake-animation';
// import makeSpringUp from './HOC/spring-up-animation';
import SearchBox from './SearchBox/SearchBox';
// import makeExpanding from './HOC/expanding-animation';
// import makeMoveUp from './HOC/move-up-animation';

// const MoveUpSearchBox = makeMoveUp(SearchBox);
// const ExpandingSearchBox = makeExpanding(SearchBox);
// const SpringUpSearchBox = makeSpringUp(SearchBox);
// const ShakeSearchBox = makeValidationErrorAnimation(SearchBox);
import makeAnimatedValidationSearchBox from './SearchBox/search-box-controller';

const AnimatedSearchBox = makeAnimatedValidationSearchBox(SearchBox);

class App extends Component {
  render() {
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <div style={style}>
        {/*<ExpandingSearchBox/>*/}
        {/*<MoveUpSearchBox/>*/}
        {/*<SpringUpSearchBox />*/}
        {/*<ShakeSearchBox />*/}
        <AnimatedSearchBox/>
      </div>
    );
  }
}

export default App;
