import classes from '../modules/BillBar.module.scss';

const BillBar = ({ bill, setBill }) => {

    const BillChangeHandler = (e) => {
        const value = e.target.value;
        // allow empty string or numbers >= 0
        if (value === "" || Number(value) >= 0) {
            setBill(value);
        }
    };

    return (
        <div className={classes["bill-wrapper"]}>
            <h2 className={classes['bill-title']}><b>Bill</b></h2>
            <input 
                value={bill} // will be "" initially
                onChange={BillChangeHandler} 
                className={classes["bill-input"]} 
                type="number"
                min="0"
                placeholder="0" // only visible when empty
            />
        </div>
    );
};

export default BillBar;
