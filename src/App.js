import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Components
import Header from './views/Header.js';
import Footer from './views/Footer.js';

// import the store created in the store.js file
import { store_persistor } from './store';

// Constants import
import * as constants from './constants.js'

// URLs Imports
import Routes from './routes/Routes.js';

// CSS Imports
import './App.css';

// General theme definition
const material_ui_theme = {
	typography: {
		fontFamily: [
			'Karla',
		].join(','),
	},
	palette: {
		primary: {
			main: '#361FFB',
			light: '#361FFB',
			dark: '#361FFB',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#BEBEBE',
			light: '#BEBEBE',
			dark: '#BEBEBE',
			contrastText: '#000000',
		},
		primary1Color: '#361FFB',
		primary2Color: '#361FFB',
		primary3Color: '#361FFB',
		accent1Color: '#361FFB',
		accent2Color: '#361FFB',
		accent3Color: '#361FFB',
		textColor: '#101010',
	},
	appBar: {
		height: 50,
	},
	datePicker: {
		color: '#361FFB',
		textColor: '#101010',
		calendarTextColor: '#101010',
		selectColor: '#361FFB',
		selectTextColor: '#101010',
		calendarYearBackgroundColor: '#ffffff',
		headerColor: '#361FFB',
	},
	raisedButton: {
		textColor: '#000000',
		primaryTextColor: '#000000'
	}
}
const theme = createMuiTheme(material_ui_theme);



class App extends Component {
	constructor(props){
		super(props);

		if (constants.purge_store_persist_on_reload) {
			store_persistor.pause()
			store_persistor.flush().then(() => { return store_persistor.purge() })
		}

	}

	render() {
		return (
			<Router>
				<MuiThemeProvider theme={theme}>
					<Header />
					<div className="main-content">
						<Routes />
					</div>
					<Footer />
				</MuiThemeProvider>
			</Router>
		);
	}
}

export default App;
