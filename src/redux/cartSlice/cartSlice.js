import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			let findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
					totalPrice: action.payload.price,
				});
			}

			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum;
			}, 0);
		},

		addOrRemove(state, action) {
			let findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem && findItem.count > 0) {
				if (action.payload.operator) findItem.count++;
				else findItem.count--;
			}

			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum;
			}, 0);
		},

		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload);
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum;
			}, 0);
		},

		clearItem(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const selectCart = state => state.cart;

export const {
	totalPrice,
	items,
	addItem,
	removeItem,
	clearItem,
	addOrRemove,
} = cartSlice.actions;

export default cartSlice.reducer;
