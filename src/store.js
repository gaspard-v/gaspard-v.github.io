import { configureStore } from '@reduxjs/toolkit';
import firestoreReducer from './firestoreReducer';

export default configureStore({
	reducer: {
		firestore: firestoreReducer,
	},
});
