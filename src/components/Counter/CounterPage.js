import React from "react";
import Counter from "./Counter";

class CounterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMount: true //Чи знаходиться у нас в дом дереві Counter чи ні 
        }
    }

    clickHandler() {
        this.setState({
            isMount: false
        })
    }

    render() {
        return (
            <>
                <button onClick={() => { this.clickHandler() }}>UnMount Counter</button>
                {this.state.isMount ? <Counter /> : null}
            </>
        )
    }

}

export default CounterPage;