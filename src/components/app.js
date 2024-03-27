

import React, { Component } from 'react';
import NewCounter from './NewCounter/NewCounter';
import NewCounterFunction from './NewCounter/NewCounterFunction';
import MouseTracer from './MouseTracker/MouseTracer';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {


    return (
      <MouseTracer />
    )
  }
}


export default App;


