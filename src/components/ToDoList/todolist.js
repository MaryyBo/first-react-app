import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm/ToDoForm";
import styles from './ToDoList.module.css'



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

    addTask = (newTaskText) => {
        const { todoList } = this.state;  // деструктуризація
        const newTask = {
            id: todoList.length + 1,
            text: newTaskText
        };

        this.setState({
            todoList: [...todoList, newTask]
        });
    };

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
            < ToDoItem
                key={task.id}
                text={task.text}
                delCallback={() => this.removeTask(task.id)}
            />);
    }

    render() {
        return (
            <>
                <h1>ToDoList</h1>
            <ul className={styles.container}>
                <ToDoForm addTask={this.addTask} />
                    {this.renderLi()}
                    
                </ul>
            </>
        );
    }

}

export default ToDoList;

