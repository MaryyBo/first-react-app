
/*Задача 1
Ми вводимо число десь на сторінці відображається квадрат цього числа (нам треба зберігати десь число)

*/

import { useState } from 'react';
import { useRef } from 'react';

const Square = () => {

    const [number, setNumber] = useState(1);
    const refContainer = useRef(null)
    console.log(refContainer)

    const changeHandler = ({ target: { value } }) => {
        setNumber(Number(value));

        const {current} = refContainer;
        if (value >=1 && value <= 10 ) {
            current.style.backgroundColor = 'green'
        } else if (value >= 11 && value <= 30) {
            current.style.backgroundColor = 'yellow' 
        } else if (value > 30) {
            current.style.backgroundColor = 'red'
            current.style.color = 'white'
        }else if( value < 0) {
            current.style.backgroundColor = 'pink'
            current.style.color = 'white'
        }
    }

    return (
        <>
            <h1>Number square</h1>
            <input
                type='number'
                placeholder='Enter number'
                value={number}
                onChange={changeHandler}
                ref={refContainer}
            />
            <p>Square: {number ** 2}</p>
        </>

    );
}

export default Square;


/* Задача 2
Якщо користувач вводить число до 10 (включно) - інпут зелений
Якщо користувач вводить число від 11 до 30 (включно) - інпут жовтий
Якщо користувач вводить число більше 30 (включно) - інпут червоний, колір тексту білий
Якщо користувач вводить від'ємне число - інпут рожевий, колір тексту білий
*/



