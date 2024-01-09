import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useRef } from 'react';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
    increment: state => { state.value++; },
		decrement: state => { state.value--; },
    addAmmount: (state, action) => {
      state.value += action.payload
    },
  },
});

const store = configureStore({
	reducer: {
    counter: counterSlice.reducer,
  },
});

export default function App() {
  return <Provider store={store}>
    <h1>Demo</h1>
    <Counter />
  </Provider>;
}

function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  const inputRef = useRef(null);

	return <>
		<button onClick={() => dispatch(counterSlice.actions.decrement())}>
      -
    </button>
		{count}
		<button onClick={() => dispatch(counterSlice.actions.increment())}>
      +
    </button>

    <input defaultValue={7} ref={inputRef} type="number" />
    <button onClick={() => {
      const amount = inputRef.current.value;
      dispatch(counterSlice.actions.addAmmount(Number(amount)));
    }}>
      add amount
    </button>

    {/* <button onClick={() => alert(inputRef.current.value)}>
      add amount
    </button> */}
	</>;
}
