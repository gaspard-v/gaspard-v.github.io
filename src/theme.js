import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		background: {
			default: '#e6e6e6',
		},
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: '#f2554a',
		},
		warning: {
			main: '#ff9f00',
		},
		info: {
			main: '#2986cc',
		},
		success: {
			main: '#8fce00',
		},
		contrastThreshold: 5.0,
	},
	typography: {
		fontFamily: `"Helvetica", "Arial", sans-serif`,
		fontSize: 13,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});

export default theme;
