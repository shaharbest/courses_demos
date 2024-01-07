import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === 'increment')
    return { value: state.value + 1 };
  if (action.type === 'decrement')
    return { value: state.value - 1 };
  if (action.type === 'reset')
    return { value: 0 };
  if (action.type === 'increment-by')
    return { value: state.value + action.payload };
  return state;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return <>
    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    <span>{state.value}</span>
    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    <button onClick={() => dispatch({ type: 'increment-by', payload: 5 })}>
      add 5
    </button>
  </>;
}


















// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   function handleIncrement() {
//     setCount(count + 1);
//   }

//   return <>
//     <span>{count}</span>
//     <button onClick={handleIncrement}>+</button>
//   </>;
// }