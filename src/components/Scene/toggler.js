import React from "react";

// Функціональна компонента - це просто функція (будь-яка) This не буде!!!

function Toggler(props) {
const clickHandler = () => {
    props.changeParentState();
}
return (
<button onClick={() => {clickHandler()}}>{props.buttonText}</button>)
}

export default Toggler;