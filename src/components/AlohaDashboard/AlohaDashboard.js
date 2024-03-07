import React from "react";
import Aloha from "../Aloha";

class AlohaDashboard extends React.Component {
    render() {
        return (
            <>
                <Aloha name="Alex" />
                <Aloha name="Symon" />
                <Aloha name="Mike" />
                <Aloha name="Iren" />
            </>
        )
    }
}

expect default AlohaDashboard;