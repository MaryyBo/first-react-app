import { useState, useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'CLICK_INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case 'INPUT_CHANGE': {
            // 1. Розбираємось з атрибутом name
            // 2. Коли ми розібралися, в який саме стейт має зайти значення - кладемо у відповідний стейт значення
            break;
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    count: 0,
    // тут ще може бути багато інших полей
}

const Clicker = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clickHandler = () => {
        dispatch({
            type: 'CLICK_INCREMENT'
        }); // В dispatch ви передаєте об'єкт action
    }

    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={clickHandler}>Increment</button>
        </>
    );
}

export default Clicker;


// const RegistrationForm = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const universalChangeHandler = ({target: {value, name}}) => {
//         switch(name) {
//             case 'firstName': {
//                 setFirstName(value);
//                 break;
//             }
//             case 'lastName': {
//                 setLastName(value);
//                 break;
//             }
//             case 'email': {
//                 setEmail(value);
//                 break;
//             }
//             case 'password': {
//                 setPassword(value);
//                 break;
//             }
//             default: {
//                 break;
//             }
//         }
//     }

//     return (
//         <form>
//             <input type='text' name='firstName' placeholder='Type your firstName' value={firstName} onChange={universalChangeHandler} />
//             <input type='text' name='lastName' placeholder='Type your lastName' value={lastName} onChange={universalChangeHandler} />
//             <input type='email' name='email' placeholder='Type your email' value={email} onChange={universalChangeHandler} />
//             <input type='password' name='password' placeholder='Type your password' value={password} onChange={universalChangeHandler} />
//         </form>
//     );
// }

// export default RegistrationForm;


/*

const [state, dispatch] = useReducer(reducer, initialState);

state - наш стан (об'єкт)
dispatch - функція, яка запускає action

dispatch(ACTION_TYPE) -->> reducer -->> змінює state

------------------------------------------

reducer - спеціальна функція, яка приймає поточний стейт і дію, яка відбулась (action)
На підставі action reducer змінює state і повертає новий state

reducer: (state, action) => newState

state - об'єкт з поточними значеннями стейту
action - або строчка з дією, яка відбулась або об'єкт з інформацією про дію, яка відбулась
newState - об'єкт зміненого стану, який повертається з reducer

reducer - чиста (pure) функція:
1. Не містить побічних ефектів (асинхронна робота);
2. детермінована функція.

const action = {
    type: НАМ_ПРИЙШЛА_ВІДПОВІДЬ_З_СЕРВЕРУ,
    payload: ТУТ_БУДУТЬ_НАШІ_ЮЗЕРИ
}

------------------------------------------

initialState - об'єкт початкового стейту

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}


*/