

import React, { Component } from 'react';
import Tree from './Tree/Tree';
import { UserContext } from "../contexts/userContext"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        avatar: 'https://img.freepik.com/premium-vector/portrait-of-a-fashionable-dog-generative-ai-glasses-style-avatar-fashion-pet-stylish-design-modern-avatar-character-trendy-teenager-breed-trend-artistic-concept-vector-illustration_579956-3458.jpg'

      }
    }
  }

  logOut = () => {
    this.setState ({
      user:{} //порожній юзер
    })}


render() {

  return (
    <UserContext.Provider value={{
      user: this.state.user,
      logOut: this.logOut

      }}>
      
      <Tree />
    </UserContext.Provider>
  );
}
  }


export default App;
