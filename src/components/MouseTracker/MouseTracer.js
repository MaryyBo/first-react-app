/*
Написати трекер положення миші на екрані (вісь x/y)

*/

import { useState, useEffect } from 'react';

const MouseTracer = (props) => {

    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        window.addEventListener('mousemove', trackerHandler);

        return () => { // сlean function = componentWillUnmount
            
            window.removeEventListener('mousemove', trackerHandler);
        }
    }, []);

    // useEffect 2 параметром приймає DependencyList< якщо props не зміниться то кол бек виконуватись не буде
   // якщо ми хочему запустити useEffect і виконати його лише 1 раз, то ми маємо лишити пустий масив [] dependenciesList - як componentDidMount

    const trackerHandler = (event) => {
        console.log(event)
        const { clientX, clientY } = event
        setCoordinates({
            x: clientX,
            y: clientY
        })

    }

    return (
        <>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
        </>
    );
}

export default MouseTracer;
