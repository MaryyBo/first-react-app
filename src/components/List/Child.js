import React from 'react';

const Child = (props) => {
    return (
        <article>
            {props.children}
        </article>
    );
}

export default Child;
