import React from "react";
import { getUsers } from "../../api";

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
        return (
            <ul>
            //Тут буде рендеритись  UserCard
            </ul>
        )
    }
}




export default UserList;