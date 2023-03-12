import React from 'react';
import styles from './Card.css';


const Card = ({ childreen, cardClass }) => {
    return (
        <div className={`${styles.card} ${cardClass}`}>{childreen}</div>
    )
}

export default Card