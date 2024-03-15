import React from "react";
import UserList from "./UserList/UserList";
import SignInForm from "./SignInForm/SignInForm";
import HiForm from "./HiForm/HiForm";
import HelloParent from "./HelloForm/HelloParent";
import ToDoList from "./ToDoList/todolist";
import UserCard from "./UserList/UserCard";
import List from "./List/List";
import FlexContainer from "./FlexContainer/FlexContainer";


class App extends React.Component {
    render() {
        return (
            <FlexContainer flexDirection="row" justifyContent="center" alignItems="stretch">
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
            </FlexContainer>
          );
        };
}

export default App;

//name.module.css
// import styles from './..'