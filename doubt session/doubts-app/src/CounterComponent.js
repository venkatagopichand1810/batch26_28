import { useCounter } from "./useCounter";

function CounterComponent() {

    // use the custom hook
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterComponent