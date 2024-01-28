import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';

const initialState = {
	items: [],
	status: 'idle'
};

const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
	return new Promise(resolve => {
		setTimeout(() => {
			const hartaProducts = [
				{ id: '101', name: 'nisim' },
				{ id: '102', name: 'shlomo' },
				{ id: '103', name: 'david' },
			];
			resolve(hartaProducts);
		}, 2000);
	});
});

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = action.payload;
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
		if (state.status === 'idle') {
			dispatch(fetchProducts())
		}
	}, [state.status, dispatch])

	return <pre>{JSON.stringify(state, null, 2)}</pre>
}

