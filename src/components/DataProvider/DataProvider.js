import React, { Component } from 'react';



// class DataProvider extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             data: [],
//             isLoading: true,
//             isError: false
//         }
//     }

//     componentDidMount() {
//         this.load();
//     }

//     load = () => {
//         this.props.loadData() //викликаємо з пропсів функцію loadData()  викликаємо колбек який передаємо датаПровайдер, цей колбек повертає нам проміс, ф ми на цей проміс з уже готовими javaScript даними навішуємо then 

//         .then((data) => {
//             this.setState({
//                 data: data
//             });
//         })
//         .catch((error) => {
//             this.setState({
//                 isError: error
//             });
//         })
//         .finally(() => {
//             this.setState({
//                 isLoading: false
//             });
//         });
//     }




//     render() {
//         return this.props.children(this.state)
//     }
// }

// export default DataProvider;

import { useState, useEffect } from 'react';

const useData = (loadData) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => { //СomponentDidMount
        loadData()
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                setIsError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return {data, isLoading, isError}
}

export default useData;



/*

1. Хук - це JsvsScript функція
2. Ім'я хуку має починатися з use
3. у хуках ми можемо використовувати інші хуки

*/