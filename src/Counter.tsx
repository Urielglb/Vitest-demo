interface CounterProps{
    count : number
    increment : () => void
    decrement : () => void
} 

const Counter = ( {count, increment, decrement} : CounterProps) => {
    return (
      <div className="card">
        <p>{count}</p>
        <button onClick={increment}>
            Increment
        </button>
        <button onClick={decrement}>
            Decrement
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    );

}
export default Counter;
