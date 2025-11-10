import classes from '../modules/BillBar.module.scss';
import Dollar from '../assets/images/icon-dollar.svg';

const BillBar = ({ bill, setBill }) => {
    const BillChangeHandler = (e) => {
        setBill(Number(e.target.value));
    };

    return (
        <div className={classes["bill-wrapper"]}>
            <h1 className={classes['bill-title']}>Bill</h1>
            <img className={classes['dollar-icon']} src={Dollar} alt="Dollar Icon" />
            <input 
                value={bill} 
                onChange={BillChangeHandler} 
                className={classes["bill-input"]} 
                type="number"
                min="0"
            />
        </div>
    );
};

export default BillBar;
