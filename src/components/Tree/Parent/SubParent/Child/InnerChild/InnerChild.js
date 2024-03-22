import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = () => {

    return (

        <UserContext.Consumer>
            {({ firsName, lastName, email, avatar }) => {
                
                return (
                    <div style={{ border: '2px solid black', padding: '25px' }}>
                        I`m innerChild

                        <p>{firsName} {lastName} {email} </p>
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;


