import { useState } from 'react';

export default function App() {
  const [howMuch, setHowMuch] = useState('');
  const [enjoyedIt1, setEnjoyedIt1] = useState(0);
  const [enjoyedIt2, setEnjoyedIt2] = useState(0);

  const tip = (howMuch * ((enjoyedIt1 + enjoyedIt2) / 2)) / 100;

  function handleReset() {
    setHowMuch('');
    setEnjoyedIt1(0);
    setEnjoyedIt2(0);

    document.getElementById('howMuch').focus();
  }

  return (
    <div>
      <BillTotal howMuch={howMuch} value={howMuch} onSetHowMuch={setHowMuch} />
      <EnjoyedItHowMuch
        who="me"
        enjoyedIt={enjoyedIt1}
        onSelect={setEnjoyedIt1}
      />
      <EnjoyedItHowMuch
        who="friend"
        enjoyedIt={enjoyedIt2}
        onSelect={setEnjoyedIt2}
      />

      {howMuch > 0 && (
        <>
          <Result howMuch={howMuch} tip={tip} />
          <Button label="Reset" onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillTotal({ howMuch, onSetHowMuch }) {
  return (
    <p>
      How much was the bill?
      <input
        type="text"
        id="howMuch"
        name="howMuch"
        value={howMuch}
        onChange={(e) => onSetHowMuch(Number(e.target.value))}
      ></input>
    </p>
  );
}

function EnjoyedItHowMuch({ who, enjoyedIt, onSelect }) {
  return (
    <p>
      {who === 'me' ? 'How did you' : 'How did your friend'} like the service?
      &nbsp;&nbsp;
      <select
        id="yourGrade"
        name="yourGrade"
        value={enjoyedIt}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </p>
  );
}

function Result({ howMuch, tip }) {
  return (
    <h2>
      You pay ${howMuch + tip} (${howMuch} + ${tip} tip)
    </h2>
  );
}

function Button({ label, onReset }) {
  return <button onClick={onReset}>&nbsp;{label}&nbsp;</button>;
}
