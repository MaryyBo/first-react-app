import React from 'react'
import styles from './ToDoFormStyle.module.css'
import cx from 'classnames';

//"*" - заборонений символ, потрібно реалізувати валідацію


class ToDoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todoItem: '', // змінна
            isInputValid: true
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
        if (value.includes('*') === true) {
            this.setState({
                isInputValid: false
            })
        } else {

            this.setState({
                [name]: value,//  ми прописуємо те Value яке нам буде приходитит з input
                isInputValid: false
            })

        }
    }

    render() {

        // console.log(styles); //отримаємо  унікальний сталь "ToDoFormStyle_container__NXfV-"

        const { todoItem, isInputValid } = this.state

        const className = cx({
            [styles.input]: true,
            [styles['invalid-input']]: !isInputValid

        })

        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                <input
                    // className={`${styles.input} ${isInputValid ? '' : styles['invalid-input']}`}
                    // className={isInputValid === true ? '' : styles['invalid-input']}
                    className={className}
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

/* 
Коли інпут валідний ---> .input
Коли інпут HEвалідний ---> всеодно закидуємо .input і через пробіл підключаємо .invalid-input

*/

// function cx(objectClassNames) { // має повернути з об'єкту повернути строчку з классами які true
// const cort = Object.entries(objectClassNames);
// const filteredArray = cort.filter(([className, condition]) => condition);
// const mapArray = filteredArray.map(([className, condition]) => className);
// return mapArray.join (' ');
// }

/*

Це об'єкт = objectClassNames = {
 className1: true
 className2: true
 className3: false

}

Картежі:
[[className1, true],[className2, true],[className3, false]]

=> [[className1],[className2]]

і отримуємо масив строк з  назвами  [className1,className2]

=> 'className1 className2'
*/


//короткий запис
function cx(objectClassNames) { // має повернути з об'єкту повернути строчку з классами які true
    return Object.entries(objectClassNames)
        .filter(([className, condition]) => condition)
        .map(([className, condition]) => className)
        .join(' ');
}