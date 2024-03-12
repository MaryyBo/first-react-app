import React from 'react'
import './style.css'

class SingnInForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputName: '' // змінна
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        alert(`Hello, ${this.state.inputName}!`);
      console.log(event)

    }

    changeHandler = ({target}) => { // деструктуризація
        this.setState({
            inputName: target.value //inputName: event.target.value
        })
    }

    render() {

        // const { email, password, isEmailValid } = this.state

        return (
            <form className='form-wrapper' onSubmit={this.submitHandler}>
                <h1>Sign In Form</h1>
                <label>
                    Type your name
                    <input
                        type='text'
                        name='inputName'
                        onChange={this.changeHandler}
                        value={this.state.inputName}
                    />
                </label>

                <button>Send Name</button>
            </form>
        )
    }
}

export default SingnInForm;

// Контрольований imput ??


/*Задача

Написати компоненту з формою, що складається з одного інпута (ім'я користувача) і кнопки відправки.
За натисненням на кнопку відправки форми виникає напис (alert), який вітає користувача тим ім'ям, яке було введено в інпут

Задача (*)
Форма, яка вітається повинна бути всередині батьківської форми.
В батьківській формі зберігається ім'я користувача у стейті.

Тобто, форма у якій запитується ім'я користувача - дочірня форма.
Форма, у якій відображається вітання ім'я користувача - батьківська форма.
Дитина повинна передати батьку name юзера, щоб він зміг з ним привітатися.
*/