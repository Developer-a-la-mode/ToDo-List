import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <header className={`${classes.card} ${props.className}`}>
            {props.children}
        </header>
    )
}

export default Card;