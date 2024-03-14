import React from 'react'


class ToDoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todoItem: '' // змінна
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const { todoItem } = this.state;

        // console.log(this.props)

        if (todoItem.trim() !== '') {
            this.props.addTask(todoItem);
            this.setState({ todoItem: '' });
        }
    };

    changeHandler = ({ target: { value, name } }) => { // деструктуризація inputName: event.target.value
        console.log('changeHadnler')
        this.setState({
            [name]: value //  ми прописуємо те Value яке нам буде приходитит з input
        })
    }

    render() {

        const { todoItem } = this.state

        return (
            <form className='form-wrap' onSubmit={this.submitHandler}>
                <input
                    name='todoItem'
                    type='text'
                    value={todoItem}
                    onChange={this.changeHandler}
                />
                <button type='submit'>Add Item</button> 
            </form>
        )
    } // button с типом submit!!!Щоб відправляти запрос
}

export default ToDoForm;

/*TodoList - компонента в якій відбувається управління списком задач і рендериться сам список задач

Зробити компоненту TodoForm, яка буде представляти собою форму
Там буде 1 інпут - текст таски
І кнопка, яка буде додавати таску до списку у батьківській компоненті TodoList

TodoList - батьківська компонента
TodoForm - дочірня компонента
*/