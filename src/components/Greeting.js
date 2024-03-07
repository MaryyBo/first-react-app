import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);

            this.state = {

            }
        }
    
    //тут можуть бути якісь обробники подій

    render () {
        // console.log(this.props);
        
        return <h1>Hello {this.props.name}</h1>
    }
}



export default Greeting;