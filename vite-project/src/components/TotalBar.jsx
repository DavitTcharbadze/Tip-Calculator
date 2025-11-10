import classes from '../modules/TotalBar.module.scss';

const TotalBar = ({ bill, people, tip, reset }) => {
    const tipAmount = (bill * (tip / 100)) / people;
    const totalAmount = (bill / people) + tipAmount;

    return (
        <div className={classes['total-wrapper']}>
            <div className={classes["tip-amount"]}>
                <h2>Tip Amount</h2>
                <h3 className={classes["second-tag"]}>/ person</h3>
                <h1>${tipAmount.toFixed(2)}</h1>
            </div>
            <div className={classes["total-amount"]}>
                <h2>Total</h2>
                <h3 className={classes["second-tag"]}>/ person</h3>
                <h1>${totalAmount.toFixed(2)}</h1>
            </div>
                <button onClick={reset} className={classes["reset-button"]}>
                    <h1>RESET</h1>
                </button>
        </div>
    );
};

export default TotalBar;
