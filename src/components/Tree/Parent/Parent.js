import React from 'react';
import SubParent from './SubParent/SubParent';

const Parent = (props) => {
    return (
        <div style={{border: '2px solid black', padding: '25px'}}>
        <SubParent/>
        </div>
    );
}

export default Parent;
