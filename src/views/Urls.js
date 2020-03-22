import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import uniqid from 'uniqid';
import validate from 'validate.js';
import ReactTooltip from 'react-tooltip'

// Actions
import * as global_action_creators from '../actions/GlobalActions.js';

// CSS Imports
import './styles/Home.css';

// Get the first N keys of a dict
function firstN(obj, n) {
	return Object.keys(obj) //get the keys out
		.sort() //this will ensure consistent ordering of what you will get back. If you want something in non-aphabetical order, you will need to supply a custom sorting function
		.slice(0, n) //get the first N
		.reduce(function(memo, current) { //generate a new object out of them
			memo[current] = obj[current]
			return memo;
	}, {})
}


function url_dict_to_string(url_dict){
	let urls_string = ''

	var url_ids = Object.keys(url_dict);
	for (var i = url_ids.length - 1; i >= 0; i--) {
		let url_id = url_ids[i]

		urls_string = urls_string + url_dict[url_id].url + '\n'
	}

	return urls_string
}


class Home extends React.Component {
	constructor(props) {
		super(props);

		// Reset the URLs status to in_queue
		let urls = Object.assign({}, this.props.full_list_urls);
		let url_ids = Object.keys(urls)
		for (var i = url_ids.length - 1; i >= 0; i--) {
			let url_id = url_ids[i]
			urls[url_id].status = 'in_queue'
		}

		this.state = {
			add_selector_field: '',
			urls: urls
		}

		this.url_list_changed = this.url_list_changed.bind(this);
		this.run = this.run.bind(this);
	}

	url_list_changed(event){
		let new_urls = Object.assign({}, {});

		let urls = event.target.value.split('\n')
		let url_id = uniqid();
		for (var i = urls.length - 1; i >= 0; i--) {
			url_id = uniqid();
			new_urls[url_id] = {url: urls[i], url_id: url_id, 'status': 'in_queue', page_source: false, response_code: false}
		}

		this.props.actions.set_full_list_urls(new_urls)

		// eslint-disable-next-line
		this.state.urls = new_urls;
	}

	run(full_list){
		let urls = Object.assign({}, this.state.urls);

		// Delete URLs that don't have a valid format
		// eslint-disable-next-line
		for (var i = Object.keys(urls).length - 1; i >= 0; i--) {
			let current_url_id = Object.keys(urls)[i];
			let url_checker = validate({website: urls[current_url_id]['url']}, {website: {url: true}});
			if (url_checker !== undefined) {
				delete urls[current_url_id]
			}
		}

		// eslint-disable-next-line
		for (var i = urls.length - 1; i >= 0; i--) {
			let url_checker = validate({website: urls[i]}, {website: {url: true}});
			if (url_checker !== undefined) {
				urls.splice(i, 1);
			}
		}

		if (Object.keys(urls).length === 0) {
			this.setState({snackbar_message: 'No proper URLs found'})
			this.setState({snackbar_open: true})
			return
		}

		if (!full_list && Object.keys(urls).length > 3) {
			urls = firstN(urls, 3)
		}

		this.props.actions.set_crawl_urls(urls)
		
		this.setState({redirect: "/progress/"})
	
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}

		return (
			<div className="home-main-container">
				<ReactTooltip />
				<Paper className="home-section">
					<div className="home-section-header">
						<div>
							<div className="home-section-header-title">
								URLs to scrape
							</div>
							<div className="home-section-header-subtitle">
								URL list here - One per line
							</div>
						</div>
						<div>							
							<Button className="home-run-sample-button" variant="contained" color="secondary" onClick={() => this.setState({redirect: "/"})}>BACK</Button>
							<Button className="home-run-sample-button" variant="contained" color="secondary" data-tip="Run a sample of 3 URLs only" onClick={() => this.run(false)}>RUN SAMPLE</Button>
							<Button className="home-run-button" variant="contained" color="primary" onClick={() => this.run(true)}>RUN</Button>
						</div>
					</div>
					<div className="home-section-body">
						<br />
						<TextField
							id="outlined-dense-multiline"
							label="URL List"
							margin="dense"
							variant="outlined"
							multiline
							fullWidth
							defaultValue={url_dict_to_string(this.state.urls)}
							onChange={this.url_list_changed}
						/>
					</div>
				</Paper>

				<Snackbar message={this.state.snackbar_message} open={this.state.snackbar_open} onClose={() => this.setState({snackbar_open: false})} />
			</div>
		);
	}
}

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		full_list_urls: state.GlobalReducer.full_list_urls,
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({...global_action_creators}, dispatch)
	}
}

// Connect component to the store
export default connect(mapStateToProps, mapDispatchToProps)(Home)









