import React from 'react';
import './style.css'

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isEmailValid: true
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);

        // Задача: Якщо на момент відправки форми, всередині рядка відсутня "@" - форма невалідна
        if(!this.state.email.includes('@')) {
            this.setState({
                isEmailValid: false
            });
        } else {
            this.setState({
                isEmailValid: true
            });
        }
    }

    universalChangeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        });
    }

    // changeEmailHandler = ({target: {value}}) => {
    //     this.setState({
    //         email: value
    //     });
    // }

    // changePasswordHandler = ({target: {value}}) => {
    //     this.setState({
    //         password: value
    //     });
    // }

    render() {
        const { email, password, isEmailValid } = this.state;

        return (
            <>
                <h1>Sign In Form</h1>
                <form className='form-wrapper' onSubmit={this.submitHandler}>
                    <label>
                        Type your email
                        <input type='text' className={isEmailValid ? '' : 'invalid'} name='email' onChange={this.universalChangeHandler} value={email} />
                    </label>
                    <label>
                        Type your password
                        <input type='password' name='password' onChange={this.universalChangeHandler} value={password} />
                    </label>

                    <button type='submit'>Send form</button>
                </form>
            </>
        )
    }
}

export default SignInForm;