import React from "react";

// Компонент представляє собою дочірній еокмпонент з формою, в якому і буде запитуватись ім'я користувача

class HelloForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputname: '' //valueName, ім'я яке введуть
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        // console.log(this.props, this.state);
        const {props: {sendUserNameToParent}, state:{name}} = this;

        sendUserNameToParent(name);
    }

    changeHandler = ({ target: { value } }) => {
        this.setState({
            inputname: value
        })
    }  // буде реРЕндер компоненту з оновленими значеннями

    

   

    render() {
        const { inputname } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Type your name" value={inputname} onChange={this.changeHandler}></input>
                <button type="submit">Send my name</button>
            </form>
        )
    }

}

export default HelloForm;



