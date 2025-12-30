import { useState } from 'react';
import TipBar from '../components/TipBar';
import classes from '../modules/MainBar.module.scss';
import PeopleBar from '../components/PeopleBar';
import BillBar from '../components/BillBar';
import Total from '../components/TotalBar';

const MainBar = ({ reset }) => {
    
    const [bill, setBill] = useState("");
    const [people, setPeople] = useState(1);
    const [tip, setTip] = useState(0);

    return (
        <>
            <h1 className={classes['title']}>S P L I <br /> T T E R</h1>
            <div className={classes['main-wrapper']}>
                <div className={classes['interactive-box']}>
                    <div className={classes["bill"]}>
                        <BillBar bill={bill} setBill={setBill} />
                    </div>
                    <div className={classes['tip']}>
                        <TipBar tip={tip} setTip={setTip} />
                    </div>
                    <div className={classes['people']}>
                        <PeopleBar people={people} setPeople={setPeople} />
                    </div>
                </div>
                <div className={classes["total"]}>
                    <Total bill={bill} people={people} tip={tip} reset={reset} />
                </div>
            </div>
        </>
    );
};

export default MainBar;
