import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = () => {

    return (

        <UserContext.Consumer>
            {({user, logOut}) => {

                return (
                    <div style={{ border: '2px solid black', padding: '25px' }}>
                        I`m innerChild

                        <button onClick={logOut}>log Out</button>
                        <p>{user.firsName} {user.lastName} {user.email} </p>
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;


