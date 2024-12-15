import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    //if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1); // works the same way as above
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s+ 1);
    }

    // BAD PRACTICE
    // test.name = "Fred";
    //setTest({ name: "Fred"})
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColour="#e7e7e7"
                textColour="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColour="#7950f2"
              textColour="#fff"
              onClick={handlePrevious}
            >
              <span>👈🏻</span> Previous
            </Button>
            <Button bgColour="#7950f2" textColour="#fff" onClick={handleNext}>
              Next <span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColour, bgColour, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColour, color: textColour }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
