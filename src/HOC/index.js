import { ThemeContext } from "../contexts/ThemeContext"
import { UserContext } from "../contexts/userContext"

//Компонент вищого порядку!!!

export const withTheme = (Component) => (props) => { //Функція вищого порядку
    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => {

                console.log('withTheme', [theme, setTheme])

                return (
                    <Component
                        theme={theme}
                        setTheme={setTheme}
                        {...props} />
                )
            }}
        </ThemeContext.Consumer>
    )
}

export const withUser = (Component) => (props) => { //Функція вищого порядку
    return (
        <UserContext.Consumer>
            {({ user, logOut }) => {

                return (
                    <Component
                        user={user}
                        logOut={logOut}
                        {...props} />
                )
            }}
        </UserContext.Consumer>
    )
}