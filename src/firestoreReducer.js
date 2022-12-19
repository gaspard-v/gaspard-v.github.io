import { createSlice } from '@reduxjs/toolkit';

const firestoreReducer = createSlice({
	name: 'firestore',
	initialState: {
		counter: 0,
	},
	reducers: {
		increment: state => {
			state.counter += 1;
		},
	},
});

export default firestoreReducer.reducer;
