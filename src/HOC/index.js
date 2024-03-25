import { ThemeContext } from "../contexts/ThemeContext"

//Компонент вищого порядку!!!

export const withTheme = (Component) => (props) => { //Функція вищого порядку
    return (
        <ThemeContext.Consumer>
            {(theme, setTheme) => {
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