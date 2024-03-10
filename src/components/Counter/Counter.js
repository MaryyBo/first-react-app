import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0

        }
        this.intervalID = null;

        console.log('constructor');
    }

    start() {
        this.intervalID = setInterval(() => {
            const { count } = this.state
            this.setState({
                count: count + 1
            })
        }, 1000);

        console.log(this.intervalID);
    }

    componentDidMount() {
        this.start();
        console.log('componentDidMount ')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
        
        console.log('GoodBye =(')
    }



    render() {
        console.log('render');

        return (
            <>
                <h1>{this.state.count}</h1>
                
            </>
        )
    }
}

export default Counter;