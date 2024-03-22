import React from 'react';
import InnerChild from './InnerChild/InnerChild';

const Child = () => {
    return (
        <div style={{border: '2px solid black', padding: '25px'}}>
        <InnerChild/>
        </div>
    );
}

export default Child;
