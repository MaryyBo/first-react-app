

import React, { Component } from 'react';
import TreeWithTheme from './Tree/Tree';
import { UserContext } from "../contexts/userContext"
import { ThemeContext } from '../contexts/ThemeContext';
import CONSTANTS from '../Constants';
const {THEMES} = CONSTANTS;


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        avatar: 'https://lapkins.ru/upload/iblock/a47/a4731614e4c149dbd65691c434dedd56.jpg'
      },
      theme: THEMES.LIGHT
    }
  }

  logOut = () => {
    this.setState({
      user: {} //порожній юзер
    })
  }

  setTheme = theme => { // має бути колбек для ЗМІНИ теми 
    this.setState({
      theme: theme //theme - можна скоротити
    })

  }

  render() {

    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        setTheme: this.setTheme
      }}>

        <UserContext.Provider value={{
          user: this.state.user,
          logOut: this.logOut
        }}>
          App
          <TreeWithTheme />

        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}


export default App;


