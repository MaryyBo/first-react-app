import React, { Component } from 'react';

class PhonesLoader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phones: [],
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        this.load();
    }

    load = () => {
        
        fetch('./phones.json')
            .then((response) => response.json())
            .then((phones) => {
                this.setState({
                    phones: phones //можно скоротити до phone
                });
            })
            .catch((error) => {
            this.setState({
                isError: error
            });
        })
        .finally (() => {
            this.setState({
                isLoading: false
            });
        })
    }




    render() {

        const { phones, isLoading, isError } = this.state
        return (
            <>
                {isLoading && <div>Loading...</div>}
                {isError && <div>Error is happening!!!</div>}

                <ul>{phones.map((currentPhone) => {
                       return <li>Brand: {currentPhone.brand} ---Model: {currentPhone.model} --- Price: {currentPhone.price}</li>
                    })}
                </ul>
            </>


        );
    }
}

export default PhonesLoader;
