import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Container } from '@mui/system';

function NavBar() {
	return (
		<AppBar position="static">
			<Container maxWidth="x1">
				<Toolbar disableGutters></Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBar;
