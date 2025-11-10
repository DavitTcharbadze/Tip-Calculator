import classes from '../modules/TipBar.module.scss';
import { useState } from 'react';

const TipBar = ({ setTip }) => {
    const [customTip, setCustomTip] = useState(0);
    const tipValues = [5, 10, 15, 25, 50];

    const handleCustomTipChange = (e) => {
        const value = Number(e.target.value);
        setCustomTip(value);
        setTip(value);
    };

    return (
        <div className={classes['tip-wrapper']}>
            <h1 className={classes['tip-title']}>Select Tip %</h1>
            <div className={classes["tip-bar"]}>
                {tipValues.map(value => (
                    <button key={value} onClick={() => setTip(value)} className={classes["button"]}>
                        <h2>{value}%</h2>
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
        </div>
    );
};

export default TipBar;
