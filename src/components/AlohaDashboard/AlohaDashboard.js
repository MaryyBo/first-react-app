import React from "react";
import Aloha from "../Aloha";



class AlohaDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersArray: [
                {
                    id: 1,
                    firstName: 'Tony',
                    lastName: 'Stark'
                }, {
                    id: 2,
                    firstName: 'Bruce',
                    lastName: 'Brenner'
                }, {
                    id: 3,
                    firstName: 'Thor',
                    lastName: 'Odinson'
                }, {
                    id: 4,
                    firstName: 'Piter',
                    lastName: 'Parker'
                }, {
                    id: 5,
                    firstName: 'Natasha',
                    lastName: 'Romanof'
                }
            ]

        }
    }
    userToAloha() {
        const { usersArray } = this.state;// деструктуризовали 

        return this.state.usersArray.map((user) => <Aloha key={user.id} firstName={user.firstName} lastName={user.lastName} />)
    }

    sortUsers() {
        const { usersArray } = this.state;
        const newArray = [...usersArray];

        newArray.sort((a, b) => a.firstName > b.firstName ? 1 : -1);

        // console.log(newArray);

        this.setState({
            usersArray: newArray
        });
    }
    render() {
        // console.log(this.userToAloha());
        return (

            <>
                <button onClick={() => { this.sortUsers() }}>Sort</button>
                {this.userToAloha()}
            </>
        )
    }
}

export default AlohaDashboard;


