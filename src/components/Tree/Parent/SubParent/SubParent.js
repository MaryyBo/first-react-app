import React from 'react';
import Child from './Child/Child';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import CONSTANTS from '../../../../Constants';
const {THEMES} = CONSTANTS

const SubParent = (props) => {
    return (
        <ThemeContext.Consumer>
            {({theme, setTheme}) => {

                const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
              return  (<div>
                    <button onClick={() => setTheme(nextTheme)} >Click to change Theme</button>
                    <Child />
                </div>)
            }}
        </ThemeContext.Consumer>
    );
}

export default SubParent;

