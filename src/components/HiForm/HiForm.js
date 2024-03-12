import React from 'react'
import './style.css'

class HiForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputName: '' // змінна
        }
    }

    submitHandler = (event) => { // при відправці форми
        event.preventDefault()
        // console.log(`Hello, ${this.state.inputName}!`)
        alert(`Hello, ${this.state.inputName}!`);
      console.log(event)

    }

    changeHandler = ({target: {value}}) => { // деструктуризація inputName: event.target.value
        this.setState({
            inputName: value //  ми прописуємо те Value яке нам буде приходитит з input
        }) 
    }

    render() {

        const {inputName } = this.state

        return (
            <form className='form-wrapper' onSubmit={this.submitHandler}> 
                <h1>Hi Form</h1>
                <label>
                    Type your name
                    <input
                        type='text'
                        name='inputName' //можна не вказувати
                        onChange={this.changeHandler}
                        value={inputName}
                    />
                </label>

                <button>Send Name</button>
            </form>
        )
    }
}

export default HiForm;

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