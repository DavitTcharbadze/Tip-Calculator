import classes from '../modules/TipBar.module.scss';
import { useState } from 'react';

const TipBar = ({ setTip }) => {
    const [customTip, setCustomTip] = useState("");
    const tipValues = [5, 10, 15, 25, 50];

    const handleCustomTipChange = (e) => {
        const value = e.target.value;
        if (value === "" || Number(value) >= 0) {
            setCustomTip(value);
            setTip(Number(value) || 0);
        }
    };

    return (
        <>
            <h2 className={classes['tip-title']}>Select Tip %</h2>
            <div className={classes["tip-bar"]}>
                {tipValues.map(value => (
                    <button key={value} onClick={() => setTip(value)} className={classes["tip"]}>
                        {value}%
                    </button>
                ))}
                <input 
                    value={customTip} 
                    onChange={handleCustomTipChange} 
                    placeholder="Custom" 
                    type="number" 
                    min="0"
                />
            </div>
        </>
    );
};

export default TipBar;
