import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchValue: '',
	categoryId: 0,
	currentPage: 1,
	sort: {
		sortBy: [
			'rating&order=desc',
			'rating&order=asc',
			'price&order=desc',
			'price&order=asc',
			'title&order=desc',
			'title&order=asc',
		],
		sortId: 0,
	},
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},

		setSortId(state, action) {
			state.sort.sortId = action.payload;
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},

		setPagecount(state, action) {
			state.currentPage = action.payload;
		},

		setFilters(state, action) {
			state.currentPage = Number(action.payload.currentPage);
			state.categoryId = Number(action.payload.categoryId);
			state.sort.sortId = action.payload.sortId;
		},
	},
});

export const {
	setCategoryId,
	setSortId,
	setPagecount,
	setFilters,
	setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
