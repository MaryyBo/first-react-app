import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../../../contexts/userContext';


const InnerChild = () => {
    // console.log('які отримуємо пропси :', props)

   const {user: {firstName, lastName, email, avatar, logOut}} =  useContext(UserContext)
console.log(logOut);

   return (
    <div>
        I`m innerChild
        <button onClick={logOut}>log Out</button>
        <p>{firstName} {lastName} {email} </p>
    </div>
)
    

   
}

export default InnerChild;


