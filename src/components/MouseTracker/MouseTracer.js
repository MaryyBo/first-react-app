/*
Написати трекер положення миші на екрані (вісь x/y)

*/

import { useState, useEffect } from 'react';

const MouseTracer = (props) => {

    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    })

    const [counter, setCounter] = useState (0)

    useEffect(() => {

        window.addEventListener('mousemove', trackerHandler);

        return () => { // сlean function = componentWillUnmount
            
            window.removeEventListener('mousemove', trackerHandler);
        }
    }, []);

    // useEffect 2 параметром приймає DependencyList< якщо props не зміниться то кол бек виконуватись не буде
   // якщо ми хочему запустити useEffect і виконати його лише 1 раз, то ми маємо лишити пустий масив [] dependenciesList - як componentDidMount

    const trackerHandler = (event) => {
       
        const { clientX, clientY } = event
        setCoordinates({
            x: clientX,
            y: clientY
        })

    }

    const clickHandler = () => {
        setCounter (counter + 1)
    }
    return (
        <>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
            <button onClick={clickHandler}>click on me</button>
            <p>Counter: {counter}</p>
        </>
    );
}

export default MouseTracer;
