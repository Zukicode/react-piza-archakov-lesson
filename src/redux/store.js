import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlice/filterSlice';
import cart from './cartSlice/cartSlice';
import pizzas from './pizzasSlice/pizzasSlice';

export const store = configureStore({
	reducer: {
		filter,
		cart,
		pizzas,
	},
});
