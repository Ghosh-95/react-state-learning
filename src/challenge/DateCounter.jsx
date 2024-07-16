import { useState } from "react"

export default function DateCounter() {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);

    function dateFunction() {
        const today = new Date("july 16 2024");

        today.setDate(today.getDate() + count);

        return today.toDateString();
    }


    return (
        <section>
            <h2>Date Counter</h2>

            <div>
                <button
                    onClick={() => setStep(step - 1)}
                >-</button>
                <span>Step: {step}</span>
                <button onClick={() => setStep(step + 180)}>+</button>
            </div>
            <div>
                <button onClick={() => setCount(count - step)}>-</button>
                <span>Count: {count}</span>
                <button onClick={() => setCount(count + step)}>+</button>
            </div>


            <p>
                <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
                <span>{dateFunction()}</span>
            </p>
        </section>
    )
}