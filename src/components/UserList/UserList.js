import React from "react";
import UserCard from "./UserCard";
import { getUsers } from "../../api";
import HashLoader from "react-spinners/HashLoader";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100,
            isLoading: true,
            isError: false,
            page: 1
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;
        if(prevState.page !== page) { // ЯКЩО У НАС ЗМІНИВСЯ НОМЕР СТОРІНКИ
            this.loadPage(page);
        }
    }

    componentDidMount() {
        const { page } = this.state;
        this.loadPage(page);
    }

    renderUsers = () => {
        const { users, filteredUsers } = this.state;
        return filteredUsers.length > 0 
        ?
        filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
        :
        users.map((user) => <UserCard user={user} key={user.login.uuid} />);
    }

    clickHandler = () => {
        getUsers().then(data => {
            const { results } = data;

            const tempArray = this.state.users;
            tempArray.push(results[0]);

            this.setState({
                users: tempArray
            })
        });
    }

    handleSearch = (event) => {
        const { target: {value: searchValue} } = event;
        const { users } = this.state;

        // 1
        // якщо в інпутику нічого немає, то чистимо масив відфільтрованих юзерів
        if(searchValue === '') {
            this.setState({
                filteredUsers: []
            });

            return;
        }
        
        // 2
        // Фільтруємо по прізвищу
        const filteredUsers = users.filter(user => user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);

        // 3
        // кладемо в стейт відфільтрованих юзерів
        this.setState({
            filteredUsers
        });
    }

    handleSetUserCount = (event) => {
        const { target: {value} } = event;

        this.setState({
            userCount: value
        });
    }

    handleLoadUsersClick = (page) => {
        const { userCount } = this.state;
        
        getUsers(userCount, page).then(data => {
            const { results } = data;

            const tempArray = this.state.users;
            results.forEach((user) => {
                tempArray.push(user);
            })

            this.setState({
                users: tempArray
            })
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

    loadPage = (page) => {
        const { userCount } = this.state;
        
        getUsers(userCount, page).then(data => {
            const { results } = data;

            this.setState({
                users: results
            })
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

    prevBtnHandler = () => {
        if(this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            });
        }
    }

    nextBtnHandler = () => {
        this.setState({
            page: this.state.page + 1
        });
    }

    render() {
        const { users, isLoading, isError } = this.state;

        return (
            <>
                <h1 className="header-text">Users List</h1>

                <input type="number" min={1} max={500} onChange={this.handleSetUserCount} />
                <button onClick={this.handleLoadUsersClick}>Load users</button>

                <input type="text" placeholder="Search by lastname" onChange={this.handleSearch} />

                <button onClick={() => this.clickHandler()}>Add user</button>

                {isLoading && <HashLoader color="#36d7b7" size={300} cssOverride={{display: "block", margin: "0 auto"}} />}
                {isError && <h2>{isError.message}</h2>}

                <button onClick={this.prevBtnHandler}>Previous page</button>
                <button onClick={this.nextBtnHandler}>Next page</button>

                <section className="card-container">{users.length ? this.renderUsers() : null}</section>
            </>
        )
    }
}

export default UserList;