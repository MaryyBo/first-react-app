import React, { Component } from 'react';

/*

1. Компонента йде за даними
2. Компонента отримує дані і кладе їх в стейт
3. Компонента ділиться  даними з кимось іншим, хто знає як треб відобразити ці дані

*/

class DataProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        this.load();
    }

    load = () => {
        this.props.loadData() //викликаємо з пропсів функцію loadData()  викликаємо колбек який передаємо датаПровайдер, цей колбек повертає нам проміс, ф ми на цей проміс з уже готовими javaScript даними навішуємо then 
        
        .then((data) => {
            this.setState({
                data: data
            });
        })
        .catch((error) => {
            this.setState({
                isError: error
            });
        })
        .finally(() => {
            this.setState({
                isLoading: false
            });
        });
    }


    

    render() {
        return this.props.children(this.state)
    }
}

export default DataProvider;


