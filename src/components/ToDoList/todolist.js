import React from "react";
import ToDoitem from "./ToDoItem";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [ //це масив
                { id: 1, text: 'to go to the party' },
                { id: 2, text: 'to meet friends' },
                { id: 3, text: 'to have a walk' },
            ]
        }
    }

    removeTask(taskIDtoRemove) {
        const { todoList } = this.state;
        const filteredArray = todoList.filter(task => task.id !== taskIDtoRemove);

        this.setState({
            todoList: filteredArray
        })
    };

    renderLi() {
        const { todoList } = this.state;

        return todoList.map((task) =>
            <ToDoitem
                key={task.id}
                text={task.text}
                delCallback={() => this.removeTask(task.id)}
            />);
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