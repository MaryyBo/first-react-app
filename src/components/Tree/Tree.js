
import React from 'react';
import Parent from './Parent/Parent';

const Tree = (props) => {
    return (
        <div style={{border: '2px solid black', padding: '25px'}}>
            <Parent/>
            </div>
    );
}

export default Tree;
