/*Задача
У нас є кнопка, треба підрахувати кількість натиснень на неї
*/

import React, { useState, useCallback } from 'react';



const Clicker = () => {

    const [clickCount, setClickCount] = useState(0);

    // const clickHandler = () => {
    //     setClickCount(clickCount + 1);
    // }

    const clickHandler = useCallback(() => {
        setClickCount(clickCount => clickCount + 1);
    }, [])

    return (
        <>
            <h1>Count: {clickCount}</h1>
            <button onClick={clickHandler}>Click</button>
        </>
    );
}

export default Clicker;
