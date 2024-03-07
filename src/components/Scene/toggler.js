import React from "react";

class Toggler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: true
        }
    }

    clickHandler() {
        this.setState({
            isOn: !this.state.isOn
        });
        // this.props.callbackFn('I`m Toggler'); //Передає Hello від батьківського Scene елементу

        this.props.changeParentState();
    }


    render() {
console.log(this.props)

        return (
            <button onClick={() => {this.clickHandler()}}>{this.state.isOn ? 'Off' : 'On'}</button>
        )
    }
}

export default Toggler;