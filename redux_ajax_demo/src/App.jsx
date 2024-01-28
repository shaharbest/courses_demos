import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';

const initialState = {
    items: [],
    status: 'idle',
	postingProductStatus: 'idle',
};

const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('http://localhost:3000/products');    
    return await res.json();
});

const addHumusProduct = createAsyncThunk('products/add', async () => {
    const res = await fetch('http://localhost:3000/products', {
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ name: 'humus', price: 666 }),
		method: 'POST'
	});
	return await res.json(); 
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(addHumusProduct.pending, (state) => {
                state.postingProductStatus = 'loading';
            })
			.addCase(addHumusProduct.fulfilled, (state, action) => {
                state.postingProductStatus = 'succeeded';
                state.items.push(action.payload);
            })
    }
});

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    },
});

export default function App() {
    return <Provider store={store}><ProductsList /></Provider>;
}

function ProductsList() {
    const state = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        let timeoutId;
        if (state.status === 'idle') {
            timeoutId = setTimeout(() => {
                dispatch(fetchProducts())
            }, 0);
        }
        return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
    }, [state.status, dispatch])

    return <>
		<button disabled={state.postingProductStatus === 'loading'}
			onClick={() => dispatch(addHumusProduct())}>
			add humus
		</button>
		<pre>{JSON.stringify(state, null, 2)}</pre>
	</>
}
