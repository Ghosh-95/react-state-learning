import { useState } from 'react'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

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

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={() => step > 1 && setStep(step - 1)}
            >Previous</button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={() => step < 3 && setStep(step + 1)}
            >Next</button>
          </div>

        </section>
      )}
    </>
  )
}

export default App
