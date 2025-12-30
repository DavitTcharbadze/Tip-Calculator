import classes from '../modules/TotalBar.module.scss';

const TotalBar = ({ bill, people, tip, reset }) => {
    // Normalize values (this prevents NaN)
    const billValue = Number(bill) || 0;
    const tipValue = Number(tip) || 0;
    const peopleValue = Number(people) || 1; // default to 1 person

    // Safe calculations
    const tipAmount = (billValue * (tipValue / 100)) / peopleValue;
    const totalAmount = (billValue / peopleValue) + tipAmount;

    return (
        <>
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
        </>
    );
};

export default TotalBar;
