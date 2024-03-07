import React from "react";

class Toggler extends React.Component {

    clickHandler() {
        this.props.changeParentState();
    }
    render() {
        console.log(this.props)

        return (
            <button onClick={() => { this.clickHandler() }}>{this.props.buttonText}</button>
        )
    }
}

export default Toggler;