

import React, { Component } from 'react';
import NewCounter from './NewCounter/NewCounter';
import NewCounterFunction from './NewCounter/NewCounterFunction';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {


    return (
      <NewCounterFunction />
    )
  }
}


export default App;


