import classes from '../modules/BillBar.module.scss';

const MAX_BILL = 10000; // maximum allowed bill

const BillBar = ({ bill, setBill }) => {

    const billChangeHandler = (e) => {
        const value = e.target.value;

        // allow empty
        if (value === "") {
            setBill("");
            return;
        }

        const num = Number(value);

        // allow numbers >= 0 and <= MAX_BILL
        if (!isNaN(num) && num >= 0 && num <= MAX_BILL) {
            setBill(value);
        }
    };

    return (
        <div className={classes['bill-wrapper']}>
            <h2 className={classes['bill-title']}>Bill</h2>
            <input
                type="number"
                value={bill}
                onChange={billChangeHandler}
                placeholder="0"
                min="0"
                max={MAX_BILL}
                className={classes['bill-input']}
            />
        </div>
    );
};

export default BillBar;
