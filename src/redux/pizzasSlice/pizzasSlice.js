import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzasStatus',
	async params => {
		const { search, categorys, sorts, currentPage } = params;
		const { data } = await axios.get(
			`https://63c80c44e52516043f4a7d06.mockapi.io/items?page=${currentPage}&limit=4&${categorys}&${sorts}&${search}`
		);
		return data;
	}
);

const initialState = {
	items: [],
	status: 'loading', // loading, success, error
};

const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		},
	},
	extraReducers: {
		[fetchPizzas.pending]: (state, action) => {
			state.status = 'loading';
		},

		[fetchPizzas.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		},

		[fetchPizzas.rejected]: (state, action) => {
			state.status = 'error';
			state.items = [];
		},
	},
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
