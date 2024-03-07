import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGreeting: true //.1 cтворити змінну стейту (за аналогією з лампочкою)

        }
    }
    //2. Зробити обробник події кліку на h1 (за аналогією з лампочкою)
    //тут можуть бути якісь обробники подій

    switcherBye() {
        this.setState({
            isGreeting: !this.state.isGreeting
        });

        console.log(this.state.greet);

    }

    render() {
        // console.log(this.props);

        // 3.В залежності від значення стейту , вирахувати, що за текст ви показуєте (за аналогією з лампочкою)
        // Не забути підписати h1 на обробник у пункті 2

        const greetingText = this.state.isGreeting ? 'Hello' : 'Bye'; // cтворюємо змінну з обчисленням того, що має змінитись і додаємо в h1

        return <h1 onClick={() => { this.switcherBye() }}>{greetingText} {this.props.name}</h1>

    }
}


export default Greeting;

/*

Доробити компоненту таким чином, щоб за натиснення на h1 текст "Hello" змінювався на "Bye"

*/