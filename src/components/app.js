
import React from "react";
import Tree from './Tree/Tree'
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/userContext";
import CONSTANTS from "../Constants";
const { THEMES } = CONSTANTS;

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com',
                avatar: 'https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg'
            },
            theme: THEMES.LIGHT
        }
    }

    logOut = () => {
        this.setState({
            user: {}
        });
    }

    setTheme = theme => {
        this.setState({
            theme
        });
    }
    
    render() {

        return (
            <ThemeContext.Provider value={{
                theme: this.state.theme,
                setTheme: this.setTheme
            }}>
                <UserContext.Provider value={{
                    user: this.state.user,
                    logOut: this.logOut
                }}>
                    App
                    <Tree />
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}

export default App;