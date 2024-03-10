/* Тут потрібно реалізувати логіку відмалювання одного єдиного користувача,
 цей єдиний користувач спускається в компоненту UserCard через пропси від 
 батьківського компонента UserList
 - аватар
 - прізвище ім'я
 - імейл

 */
import './style.css';

function UserCard(props) {

    const { user: { name: { first: firstName, last: lastName }, email, picture: { large } }} = props;
    return (
        <article className='card-wrapper'>
            <img src={large} alt={`${firstName}${lastName}`} className='user-img' />
            <h1>{firstName} {lastName}</h1>
            <p>{email}</p>
        </article>
    )
}

export default UserCard;