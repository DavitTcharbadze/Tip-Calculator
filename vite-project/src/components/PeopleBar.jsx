import classes from '../modules/PeopleBar.module.scss';

const PeopleBar = ({ people, setPeople }) => {

    const PeopleChangeHandler = (e) => {
        const value = e.target.value;

        // allow empty or numbers >= 1
        if (value === "" || Number(value) >= 1) {
            setPeople(value);
        }
    };

    return (
        <div className={classes['people-wrapper']}>
            <h2 className={classes['people-title']}>Number of People</h2>
            <input
                type="number"
                value={people}            // starts empty
                onChange={PeopleChangeHandler}
                className={classes["number-input"]}
                min="1"
                placeholder="1"           // visible when empty
            />
        </div>
    );
};

export default PeopleBar;
