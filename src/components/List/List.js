import React, { Component } from 'react';
import Child from './Child';

class List extends Component {
    render() {
        return (
            <Child>
                <h1>Header</h1>
                <p>Hello Child</p>
            </Child>
        );
    }
}

export default List;
