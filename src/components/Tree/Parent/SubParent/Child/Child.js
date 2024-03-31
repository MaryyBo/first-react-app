import { useContext } from 'react';
import InnerChild from './InnerChild/InnerChild';
import { UserContext } from '../../../../../contexts/userContext';
import style from "./img.module.css"


const Child = () => {

  const {user: {avatar, firstName, lastName}} = useContext(UserContext)
    return (
        <div className={style.border}>
             <img className={style.img} src={avatar} alt={`${firstName} ${lastName}`}/>
            <InnerChild />
        </div>
    )
}



export default Child;
