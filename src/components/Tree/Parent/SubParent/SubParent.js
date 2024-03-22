import React from 'react';
import Child from './Child/Child';

const SubParent = (props) => {
    return (
        <div style={{border: '2px solid black', padding: '25px'}}>
        <Child />
        </div>
    );
}

export default SubParent;
