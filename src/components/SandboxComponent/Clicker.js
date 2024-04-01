/*Задача
У нас є кнопка, треба підрахувати кількість натиснень на неї
*/

import React, { useState, useCallback, useMemo } from 'react';



const Clicker = () => {

    const [clickCount, setClickCount] = useState(0);
    const [inputValue, setInputValue] = useState('')

    // const clickHandler = () => {
    //     setClickCount(clickCount + 1);
    // }

    const clickHandler = useCallback(() => {
        setClickCount(clickCount => clickCount + 1);
    }, [])

    // const changeHandler = ({ target: { value } }) => {
    //     setInputValue(Number(value));
    // }

    const changeHandler = useCallback(({ target: { value } }) => {
        setInputValue(Number(value));
    })


    const logValueHandler = () => {

        let sum = 0
        for (let i = 0; i < inputValue; i++) {
            sum += i
        }
        return sum;
    }

    const memoizedValue = useMemo(() => logValueHandler(), [inputValue])
    console.log(memoizedValue)
    
    // const logValueHandler = useCallback(() => {
    //     let sum = 0
    //     for (let i = 0; i < inputValue; i++) {
    //         sum += i
    //     }
    //     return sum;

    // }, [inputValue])

    return (
        <>
            <h1>Count: {clickCount}</h1>
            <button onClick={clickHandler}>Click</button>
            <input
                type='text'
                value={inputValue}
                onChange={changeHandler}
                placeholder='Введіть число, для якого потрібно знайти суму чисел(верхню межу)'
            />
            <button onClick={logValueHandler}>Розрахувати суму</button>
        </>
    );
}

export default Clicker;
