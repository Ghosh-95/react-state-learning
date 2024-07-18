import { useState } from 'react'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


// re-usable button component
function Button({ background, color, onClick, children }) {
  return (
    <button style={{ background, color }} onClick={onClick}>{children}</button>
  )
};


function StepMessage({ step, children }) {
  return <div className='message'>
    Step {step}
    {children}
  </div>
}

function AppVTwo() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => step > 1 && setStep(step - 1);
  const handleNext = () => step < 3 && setStep(step + 1);

  return (
    <>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>&times;</button>

      {isOpen && (
        <section className="steps">

          <div className='numbers'>

            <div className={step >= 1 ? 'active' : null}>1</div>
            <div className={step >= 2 ? 'active' : null}>2</div>
            <div className={step >= 3 ? 'active' : null}>3</div>

          </div>

          <StepMessage step={step}>
            <h3>{messages[step - 1]}</h3>

            <div className="buttons">
              <Button background={"#f1f1f1"} color={"#000"} onClick={() => confirm("Leave this page?")}>
                Learn How
              </Button>
            </div>
          </StepMessage>



          <div className="buttons">
            <Button background={"#7950f2"} color={"#fff"} onClick={handlePrevious}>👈 Previous</Button>
            <Button background={"#7950f2"} color={"#fff"} onClick={handleNext} >Next 👉</Button>
          </div>
        </section>
      )}
    </>
  )
}

export default AppVTwo;
