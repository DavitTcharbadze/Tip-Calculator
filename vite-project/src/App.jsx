import { useState } from 'react';
import MainBar from "./components/MainBar";
import classes from './App.css';

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0);

  const reset = () => {
    setBill(0);
    setPeople(1);
    setTip(0);
  };

  return (
    <div className={classes['app-wrapper']}>
      <MainBar 
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={setPeople}
        tip={tip}
        setTip={setTip}
        reset={reset}
      />
    </div>
  );
}

export default App;
