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

        getUsers().then(data => { //console.log(data)
            const { results } = data;
            this.setState({
                users: results
            })
        });

    }

    render() {
        const { users } = this.state

        return ( //Тут буде рендеритись  UserCard
            <>
                {users.length > 0 ? <UserCard user={users[0]}/> : null}
            </>
        )
    }
}




export default UserList;