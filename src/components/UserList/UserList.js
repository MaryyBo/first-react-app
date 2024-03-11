import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard"

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }
    componentDidMount() {  //тут буде запрос на сервер

        getUsers().then(data => { 

            // console.log(data);
            const { results } = data;

            this.setState({
                users: results
            })
        });

    }

    render() {
        const { users } = this.state

        let userList = [];
        users.forEach(user => {
            userList.push(<UserCard user={user}/>); // pushимо по 1 вже створеній карточці в змінну userList
        })

        return (
            <>
                {userList}
            </>
        );

        // return ( //Тут буде рендеритись 1 UserCard
        //     users.forEach(element => {
        //         <>
        //             {users.length > 0 ? <UserCard user={element}/> : null}
        //         </>
        //     })
        // )
    }
}




export default UserList;

// Задача 2
// В компоненті UserList передбачити можливість відмалювання карток для багатьох юзерів
// https://randomuser.me/api/?results=100