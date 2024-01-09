import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
  items: [
    { id: '11', quantity: 2 },
    { id: '12', quantity: 8 },
    { id: '13', quantity: 9 },
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    incrementBookQuantity: (state, action) => {
      const addBookID = action.payload;
      const bookCartItem = state.items.find(b => b.id === addBookID);

      if (bookCartItem) {
        bookCartItem.quantity++;
      }
      else {
        state.items.push({ id: addBookID, quantity: 1 });
      }
    },
  },
});

export { cartSlice };