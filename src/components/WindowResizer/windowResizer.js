
import React, { Component } from 'react';

class WindowResizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.eventHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.eventHandler)
    }

    eventHandler = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    render() {
        const { width, height} = this.state
        return (

            <div>
                <p>Current viewport width: {width}px</p>
                <p>Current viewport height: {height}px</p>
            </div>
        );
    }
}

export default WindowResizer;
