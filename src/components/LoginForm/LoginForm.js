import React, { Component } from 'react';
import * as yup from 'yup';

const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}

const SIGN_UP_SCHEMA = yup.object({
    firstName: yup.string().required().min(1).max(50),
    lastName: yup.string().required().min(1).max(50),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
}
)

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initialState
        }
    }



    changeHandler = ({ target: { value, name } }) => {
        this.setState({
            [name]: value // квадратні дужки тут для того, щоб динамічно визначити ім'я властивості, яку потрібно оновити у стані, використовуючи значення name, яке ви отримали з події onChange
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(SIGN_UP_SCHEMA.isValidSync(this.state)); // потенційно тут робиться запит на сервер
    }
    render() {

        const { email, password, firstName, lastName } = this.state;

        return (
            <form onSubmit={this.submitHandler}>
                <input
                    value={firstName}
                    type='text'
                    placeholder='Type your name'
                    name='firstName'
                    onChange={this.changeHandler}
                />
                <input
                    value={lastName}
                    type='text'
                    placeholder='Type your lastname'
                    name='lastName'
                    onChange={this.changeHandler}
                />
                <input
                    value={email}
                    type='text'
                    placeholder='Type your email'
                    name='email'
                    onChange={this.changeHandler}
                />

                <input
                    value={password}
                    type='text'
                    placeholder='Type your password'
                    name='password'
                    onChange={this.changeHandler}
                />
                <button>Login</button>

            </form>
        );
    }
}

export default SignUpForm;
