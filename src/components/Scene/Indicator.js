
// import React from "react";

import './style.css'

function Indicator (props) {
   
    return (
    <div className ='indicator'>{props.text}</div>)
    }
    
    export default Indicator;


/*
Задача:

Зробити функціональну компоненту, яка рендерить невеликий div 200*200.
Рендерить там текст, але текст, вона отримує через props.
В якості батьківської компоненти можно використати Scene

function Toggler(props) {
const clickHandler = () => {
    props.changeParentState();
}
return (
<button onClick={() => {clickHandler()}}>{props.buttonText}</button>)
}

export default Toggler;
*/
