
import React from "react";
import Tree from './Tree/Tree'
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/userContext";
import Square from "./Square/Square";
import CONSTANTS from "../Constants";
const { THEMES } = CONSTANTS;



class App extends React.Component {
   
    render() {

        return (
            <Square/>
        )
    }
}

export default App;