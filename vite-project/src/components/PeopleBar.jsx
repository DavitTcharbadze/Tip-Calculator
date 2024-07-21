import classes from '../modules/PeopleBar.module.scss';
import Person from '../assets/images/icon-person.svg';
import { useState } from 'react';

const PeopleBar = ({ people, setPeople }) => {
    const PeopleChangeHandler = (e) => {
        setPeople(Number(e.target.value));
    };

    return (
        <div className={classes['people-wrapper']}>
            <h1>Number of People</h1>
            <img src={Person} alt="Person Icon" />
            <input 
                value={people} 
                onChange={PeopleChangeHandler} 
                className={classes["number-input"]} 
                type="number"
                min="1"
            />
        </div>
    );
};

export default PeopleBar;
