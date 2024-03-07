import React from "react";
import './App.css'; // css cтилі підключені (сlassName)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false // за замововчуванням лампочка вимкнена
    }
  }

  toggleHandler() { // це функція, її треба викликати
    this.setState({
      on: !this.state.on
    });
    console.log(this.state.on)
  }

  render() {
    const classForDiv = this.state.on ? 'lamp-on' : 'lamp-off';

    return (
      <React.Fragment>
        <div className={classForDiv}></div>
        <button onClick={() => { this.toggleHandler() }}>Toggle!</button>
      </React.Fragment>
    )
  }
}

export default App;

/*
Створити кружечок-лампочку і кнопку-вимикач.
За натисненням на кнопку кружечок має підсвітитись( наповнитись жовтим кольором)
*/ 