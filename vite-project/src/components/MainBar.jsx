import TipBar from '../components/TipBar';
import classes from '../modules/MainBar.module.scss';
import PeopleBar from '../components/PeopleBar';
import BillBar from '../components/BillBar';
import Total from '../components/TotalBar';

const MainBar = ({ bill, setBill, people, setPeople, tip, setTip, reset }) => {
    return (
        <div className={classes['main-wrapper']}>
            <div className={classes["main-title"]}>
                <h1>S P L I <br /> T T E R</h1>
            </div>
            <div className={classes['main-box']}>
                <div className={classes["bill"]}>
                    <BillBar bill={bill} setBill={setBill} />
                </div>
                <div className={classes['tip']}>
                    <TipBar setTip={setTip} />
                </div>
                <div className={classes['people']}>
                    <PeopleBar people={people} setPeople={setPeople} />
                </div>
                <div className={classes["total"]}>
                    <Total bill={bill} people={people} tip={tip} reset={reset} />
                </div>
            </div>
        </div>
    );
};

export default MainBar;
