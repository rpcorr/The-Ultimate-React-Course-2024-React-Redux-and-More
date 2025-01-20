import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [enjoyedIt1, setEnjoyedIt1] = useState(0);
  const [enjoyedIt2, setEnjoyedIt2] = useState(0);

  const tip = bill * ((enjoyedIt1 + enjoyedIt2) / 2 / 100);

  function handleReset() {
    setBill('');
    setEnjoyedIt1(0);
    setEnjoyedIt2(0);

    document.getElementById('bill').focus();
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage enjoyIt={enjoyedIt1} onSelect={setEnjoyedIt1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage enjoyIt={enjoyedIt2} onSelect={setEnjoyedIt2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      How much was the bill?{' '}
      <input
        type="text"
        id="bill"
        name="bill"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ children, enjoyIt, onSelect }) {
  return (
    <div>
      <label>{children} </label>
      <select
        name="service"
        value={enjoyIt}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h2>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
