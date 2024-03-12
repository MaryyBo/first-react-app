import React from "react";
import UserList from "./UserList/UserList";
import SignInForm from "./SignInForm/SignInForm";
import HiForm from "./HiForm/HiForm";
import HelloParent from "./HelloForm/HelloParent";

class App extends React.Component {
    render() {
        return <HelloParent/>
    }
}

export default App;