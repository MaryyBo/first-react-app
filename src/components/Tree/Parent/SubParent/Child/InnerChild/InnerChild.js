import React from 'react';
import { withUser } from '../../../../../../HOC';


const InnerChild = (props) => {
    console.log('які отримуємо пропси :', props)
    const {logOut} = props

    return (
        <div>
            I`m innerChild

            <button onClick={logOut}>log Out</button>
            <p>{props.user.firsName} {props.user.lastName} {props.user.email} </p>
        </div>
    )
}

export default withUser(InnerChild);


