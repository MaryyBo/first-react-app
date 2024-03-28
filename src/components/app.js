
import React from "react";
import NewUserList from "./UserList/NewUserList";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    
    render() {
        return (
            <NewUserList />
        )
    }
}

export default App;