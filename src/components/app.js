import React from "react";
import UserList from "./UserList/UserList";
import SignInForm from "./SignInForm/SignInForm";
import HiForm from "./HiForm/HiForm";
import HelloParent from "./HelloForm/HelloParent";
import ToDoList from "./ToDoList/todolist";
import UserCard from "./UserList/UserCard";

class App extends React.Component {
    render() {
        return <UserList />
    }
}

export default App;

//name.module.css
// import styles from './..'