import React from "react";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [ //це масив
                { id: 1, text: 'to go to the party' },
                { id: 1, text: 'to meet friends' },
                { id: 1, text: 'to have a walk' },
            ]
        }
    }
    renderLi() {
        const { todoList } = this.state;

        return todoList.map((task) => <li key={task.id}>{task.text}</li> );

    }
    render() {
        return (
            <>
            <h1>ToDoList</h1>
                <ul>
                    {this.renderLi()}
                </ul>
            </>
        )
    }

}

export default ToDoList;