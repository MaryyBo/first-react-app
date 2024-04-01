
// class TVLoader extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             tv: [],
//             isLoading: true,
//             isError: false
//         }
//     }

//     componentDidMount() {
//         this.load();
//     }

//     load = () => {
//         fetch('./tv.json')
//             .then((response) => response.json())
//             .then((tv) => {
//                 this.setState({
//                     tv: tv //можно скоротити до phone
//                 });
//             })
//             .catch((error) => {
//             this.setState({
//                 isError: error
//             });
//         })
//         .finally (() => {
//             this.setState({
//                 isLoading: false
//             });
//         })
//     }

//     render() {

//         const { tv, isLoading, isError } = this.state
//         return (
//             <>
//                 {isLoading && <div>Loading...</div>}
//                 {isError && <div>Error is happening!!!</div>}

//                 <ul>{tv.map((currentTV) => {
//                        return <li>Brand: {currentTV.brand} ---Model: {currentTV.model} --- Price: {currentTV.price}</li>
//                     })}
//                 </ul>
//             </>


//         );
//     }
// }

// export default TVLoader;


import useData from '../DataProvider/DataProvider';

import React from 'react';

const TVLoader = () => {
    const { data: tv, isLoading, isError } = useData(getTV);

    function getTV() {
        return fetch('./tv.json')
            .then((response) => response.json())

    }
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error is happening!!!{isError.message}</div>}

            <ul>{tv.map((currentTV, index) => {
                return <li key={index}>Brand: {currentTV.brand} ---Model: {currentTV.model} --- Price: {currentTV.price}</li>
            })}
            </ul>
        </>


    );
}

export default TVLoader;

