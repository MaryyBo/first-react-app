
import {useContext} from 'react';
import Parent from './Parent/Parent';
import style from "./Tree.module.css";
import CONSTANTS from '../../Constants';
import cx from "classnames";
import { ThemeContext } from '../../contexts/ThemeContext';
const { THEMES } = CONSTANTS;


const Tree = () => {

   const {theme} =  useContext(ThemeContext)

    const classNames = cx(style.container, {
        [style.lightTheme]: theme === THEMES.LIGHT,
        [style.darkTheme]: theme === THEMES.DARK
    });

    // console.log('tree', classNames)

    return (
        <div className={classNames}>
            <Parent />
        </div>
    )
}


export default Tree;

