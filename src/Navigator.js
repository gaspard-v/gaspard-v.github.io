import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import NavBar from './NavBar';
import { Box } from '@mui/material';
function Navigator() {
	return (
		<Box>
			<NavBar />
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
			</Routes>
		</Box>
	);
}

export default Navigator;
