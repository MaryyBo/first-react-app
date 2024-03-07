import React from "react";
import Toggler from "./toggler";
import "./style.css";

class Scene extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLight: true
        }
    }
    toggleScene() {
        this.setState({
            isLight: !this.state.isLight
        });
    }
    render() {

        const { isLight } = this.state;

        return (
            <div className={isLight ? "scene-on" : "scene-off"}>
                <Toggler changeParentState={() => { this.toggleScene() }} buttonText={isLight ? 'Off' : 'On'} />
            </div>
        )
    }
}
export default Scene;
i

/* Parent може впливати на child через props 

Від дитини до батька ми обмінюємось даними через сallback (callback pattern)

*/