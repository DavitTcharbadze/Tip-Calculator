import classes from '../modules/TotalBar.module.scss';

const TotalBar = ({ bill, people, tip, reset }) => {
    // Normalize inputs                     
    const billValue = Number(bill) || 0;
    const tipValue = Number(tip) || 0;
    const peopleValue = Number(people) || 1;

    // Calculations
    const tipAmount = (billValue * (tipValue / 100)) / peopleValue;
    const totalAmount = (billValue / peopleValue) + tipAmount;

    // Format numbers: round if >=1000, else show one or two decimals
    const formatNumber = (num) => {
        if (num >= 1000) return Math.round(num);       // round large numbers
        if (num >= 100) return num.toFixed(1);        // medium numbers
        return num.toFixed(2);                        // small numbers
    };  


    return (
        <>
            <div className={classes["tip-amount"]}>
                <h2>Tip Amount</h2>
                <h3 className={classes["second-tag"]}>/ person</h3>
                <h1>${formatNumber(tipAmount)}</h1>
            </div>

            <div className={classes["total-amount"]}>
                <h2>Total</h2>
                <h3 className={classes["second-tag"]}>/ person</h3>
                <h1>${formatNumber(totalAmount)}</h1>
            </div>

            <button onClick={reset} className={classes["reset-button"]}>
                RESET
            </button>
        </>
    );
};

export default TotalBar;
