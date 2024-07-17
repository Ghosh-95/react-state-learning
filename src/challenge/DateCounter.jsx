import { useState } from "react"

export default function DateCounter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    function dateFunction() {
        const today = new Date("july 16 2024");

        today.setDate(today.getDate() + count);

        return today.toDateString();
    }


    return (
        <section style={{ width: '30vw', margin: "0 auto", textAlign: "center" }}>
            <h2>Date Counter</h2>

            <div>
                <label htmlFor="step-range">
                    <input type="range" id="step-range" min={0} max={10} value={step} onChange={(e) => setStep(Number(e.target.value))} />
                    <span>Step: {step}</span>
                </label>
            </div>
            <div>
                <button onClick={() => setCount(count => count - step)}>-</button>
                <label htmlFor="count-input"></label>
                <input type="text" id="count-input" value={count} onChange={(e) => setCount(Number(e.target.value))} />
                <button onClick={() => setCount(count => count + step)}>+</button>
            </div>


            <p>
                <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
                <span>{dateFunction()}</span>
            </p>

            {(count !== 0 || step !== 1) && (<button onClick={() => {
                setCount(0);
                setStep(1);
            }}>Reset</button>)}
        </section>
    )
}