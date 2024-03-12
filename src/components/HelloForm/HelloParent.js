/*  Задача (*)
Форма, яка вітається повинна бути всередині батьківської форми.
В батьківській формі зберігається ім'я користувача у стейті.

Тобто, форма у якій запитується ім'я користувача - дочірня форма.
Форма, у якій відображається вітання ім'я користувача - батьківська форма.
Дитина повинна передати батьку name юзера, щоб він зміг з ним привітатися.
*/

// Це батьківський компонент, що містить ім'я користувача

import React from "react";
import HelloForm from "./HelloForm";


class HelloParent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Anonym'
        }
    }

    getStateFromChild = (username) => {
        this.setState ({
            name: username
        })
    }

    render () {
        const {name} = this.state
        return (
            <>
            <HelloForm sendUserNameToParent={this.getStateFromChild}/> 
            <p>Hello {name}</p>
            </>
        )
    } // HelloForm ми передаєм колбек sendUserNameToParent - це абстракція з якою ми працюємо
}

export default HelloParent;

