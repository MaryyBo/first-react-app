import React from 'react';
import InnerChild from './InnerChild/InnerChild';
import { withUser } from '../../../../../HOC';
import style from "./img.module.css"


const Child = (props) => {
    return (
        <div className={style.border}>
             <img className={style.img} src={props.user.avatar} alt='avatar'/>
            <InnerChild />
        </div>
    )
}



export default withUser(Child);
