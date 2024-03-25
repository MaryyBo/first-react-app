import React from 'react';
import Child from './Child/Child';
import { withTheme } from '../../../../HOC';
import { UserContext } from '../../../../contexts/userContext';
import CONSTANTS from '../../../../Constants';
const { THEMES } = CONSTANTS;

const Subparent = (props) => { // Тут ми фокусуємось на вирішенні нашої задачі, без хлам-коду типу консьюмерів
    const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    return (<div>
        Subparent
        <p>{props.user.firstName}</p>
        <button onClick={() => props.setTheme(nextTheme)}>Click to change theme</button>
        <Child />
    </div>)
}

const SubparentWithThemeAndUser = (props) => { // Компонента, яка займається загортанням в консьюмери
    return (
        <UserContext.Consumer>
            {({user, logOut}) => {
                const SubparentThemed = withTheme(Subparent)
                return (
                    <SubparentThemed user={user} logOut={logOut} />
                )
            }}
        </UserContext.Consumer>
    )
}

export default SubparentWithThemeAndUser;