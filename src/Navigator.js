import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
function Navigator() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
		</Routes>
	);
}

export default Navigator;
