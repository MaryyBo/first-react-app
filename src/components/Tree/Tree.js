
import React from 'react';
import Parent from './Parent/Parent';
import style from "./Tree.module.css";
import CONSTANTS from '../../Constants';
import cx from "classnames";
import { withTheme } from '../../HOC';
const { THEMES } = CONSTANTS;


const Tree = (props) => {

    const classNames = cx(style.container, {
        [style.lightTheme]: props.theme === THEMES.LIGHT,
        [style.darkTheme]: props.theme === THEMES.DARK
    });

    console.log('tree', classNames)

    return (
        <div className={classNames}>
            <Parent />
        </div>
    )
}

const TreeWithTheme = withTheme(Tree);

export default TreeWithTheme;




/*
Компонент вищого  порядку- функція, яка приймає компонент як аргумент 
і повертає новий компонент
*/