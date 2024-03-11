import React from 'react'
import './style.css'

class SingnInForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '', // змінна
            password: '',
            isEmailValid: true
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(event)

        //Задача: Якщо н момент відправки форми всередені рядка відстуня @- форма Невалідна
        if (!this.state.email.includes('@')) { //якщо тут немає собачки
            this.setState ({
                isEmailValid : false
            });

    } else {
        this.setState ({
            isEmailValid : true
        });
    }
}

    // changeEmailHandler = ({target: {value}}) => {
    //     // console.log(event)
    //     this.setState = ({
    //         email: value
    //     });
    // }

    // changePasswordHandler = ({target: {value}}) => {
    //     // console.log(event)
    //     this.setState = ({
    //         password: value
    //     });
    // }


    // щоб не повторювати код, можна вивести його в один 

    universalChangeHandler = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        })
    }

    render() {

        const { email, password, isEmailValid} = this.state
        return (
            <form className='form-wrapper' onSubmit={this.submitHandler}>
                <h1>Sign In Form</h1>
                <label>
                    Type your email
                    <input type='text' className={isEmailValid ? '' : 'invalid'} name='email' onChange={this.universalChangeHandler} value={email} placeholder='Type your email' />
                </label>

                <label>
                    Type your password
                    <input type='password' name='password' onChange={this.universalChangeHandler} value={password} placeholder='Type your password' />
                </label>

                <button type='submit'>Send Form</button>
            </form>
        )
    }
}

export default SingnInForm;

// Контрольований imput ??