import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Home from '../views/Home.js';
import Urls from '../views/Urls.js';
import Progress from '../views/Progress.js';
import PartialResults from '../views/PartialResults.js';
import PostProcess from '../views/PostProcess.js';
import FinalResults from '../views/FinalResults.js';

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route
					path="/"
					exact
					render={() => {return(<Home/>)}
					}
				/>
				<Route
					path="/urls/"
					exact
					render={() => {return(<Urls/>)}
					}
				/>
				<Route
					path="/progress/"
					exact
					render={() => {return(<Progress/>)}
					}
				/>
				<Route
					path="/partial-results/"
					exact
					render={() => {return(<PartialResults/>)}
					}
				/>
				<Route
					path="/post-process/"
					exact
					render={() => {return(<PostProcess/>)}
					}
				/>
				<Route
					path="/final-results/"
					exact
					render={() => {return(<FinalResults/>)}
					}
				/>
			</Switch>
		);
	}
}