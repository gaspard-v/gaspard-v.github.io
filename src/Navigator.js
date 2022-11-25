import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import NavBar from './NavBar';
function Navigator() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
			</Routes>
		</>
	);
}

export default Navigator;
