import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class UserCard extends React.Component {



    render() {
        const { user: { name: { first, last }, email, picture: { large } } } = this.props;

        return (
            <article className='card-wrapper'>
                <img src={large} alt={`${first}${last}`} className='user-img' />
                <h1>{first} {last}</h1>
                <p>{email}</p>
            </article>
        )
    }
}

UserCard.propTypes = {
    user: PropTypes.shape({

        name: PropTypes.shape({
            first: PropTypes.string.isRequired,
            last: PropTypes.string.isRequired
        }).isRequired,

        email: PropTypes.string.isRequired,

        picture: PropTypes.shape({
            large: PropTypes.string.isRequired
        }).isRequired

    }).isRequired
}

export default UserCard;


