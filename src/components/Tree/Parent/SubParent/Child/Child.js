import React from 'react';
import InnerChild from './InnerChild/InnerChild';
import { UserContext } from '../../../../../contexts/userContext';
import style from "./img.module.css"

const Child = (props) => {
    console.log(1, props)
    return (
        <UserContext.Consumer>
            {({user:{avatar}}) => {
                console.log(2, avatar)
                
                return (
                    <div className={style.border}>
                         <img className={style.img} src={avatar} alt='avatar'/>
                        <InnerChild />
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default Child;
