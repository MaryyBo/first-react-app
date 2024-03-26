import React, { Component } from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';

const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}


class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initialState,
            isError: null
        }
    }



    changeHandler = ({ target: { value, name } }) => {
        this.setState({
            [name]: value // квадратні дужки тут для того, щоб динамічно визначити ім'я властивості, яку потрібно оновити у стані, використовуючи значення name, яке ви отримали з події onChange
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        try {
            SIGN_UP_SCHEMA.validateSync(this.state); // потенційно тут робиться запит на сервер

            // якщо стейт пройшов валідацію то отримуємо userObject і продовжуємо далі виконувати код  
            this.setState({
                isError: null
            })
        }// якщо стейт не пройшов валідацію, то попадаємо в catch
        catch (err) {
            this.setState({
                isError: err
            })
        }
    }
    render() {

        const { email, password, firstName, lastName, isError } = this.state;

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
                {isError && <p style={{ color: 'red', fontSize: '20px' }}>{isError.message}</p>}

            </form>
        );
    }
}

export default SignUpForm;
