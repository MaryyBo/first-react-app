import React, { useState } from 'react';


const NewCounterFunction = (props) => {


    const [counter, setCounter] = useState(0);
    // console.log(values)

    const [step, setStep] = useState(1)

    const increment = () => {
        setCounter(counter + step)
    }

    const changeHandler = ({ target: { value } }) => {
        // console.log(event)
        setStep(Number(value));

    }


    return (
        <>
            {counter}
            <input
                type='number'
                onChange={changeHandler}
                value={step}
            />

            <button onClick={increment}>+</button>

        </>
    );
}

export default NewCounterFunction;
